import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation/schemas';
import { mailService } from '@/lib/mail/service';
import rateLimit from '@/lib/rate-limit';
import { env } from '../../../../env.mjs';

const limiter = rateLimit({
  interval: env.RATE_LIMIT_WINDOW,
});

function getIP(request: NextRequest): string {
  let ip = request.headers.get('x-real-ip') ?? '127.0.0.1';
  
  if (!ip) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';
  }
  
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getIP(request);
    console.log(`Rate limiting check for IP: ${ip}`);
    
    try {
      await limiter.check(env.RATE_LIMIT_MAX, `contact_${ip}`);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Too many requests. Please try again later.';
      console.log(`Rate limited IP: ${ip}, error:`, errorMessage);
      return NextResponse.json(
        { error: errorMessage },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Reset': new Date(Date.now() + env.RATE_LIMIT_WINDOW).toISOString(),
          }
        }
      );
    }

    // Валидация данных
    const body = await request.json();
    console.log('Received contact data:', { ...body, message: '***' });
    
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.issues.map(issue => issue.message));
      return NextResponse.json(
        { 
          error: 'Invalid data', 
          details: validationResult.error.issues.map(issue => issue.message) 
        },
        { status: 400 }
      );
    }

    // Отправка email
    console.log('Sending email...');
    await mailService.sendContactEmail(validationResult.data);
    console.log('Email sent successfully');

    // Возвращаем успешный ответ
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending message:', error);
    
    return NextResponse.json(
      { 
          error: 'Error sending message',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}