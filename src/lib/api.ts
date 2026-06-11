export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  topic?: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string[];
}

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_MODE === 'development'
      ? 'http://localhost:3000'
      : window.location.origin;
    
    const response = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let responseData: ContactResponse;
    try {
      responseData = await response.json();
    } catch {
      responseData = {
        success: false,
        error: 'Unknown response format from server',
      };
    }

    if (!response.ok) {
      throw new Error(
        responseData.error || 
        responseData.message || 
        `Server error: ${response.status}`
      );
    }

    return {
      success: true,
      message: responseData.message || 'Message sent successfully',
    };

  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
