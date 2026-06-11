export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
export const IS_DEVELOPMENT = process.env.NEXT_PUBLIC_MODE === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';