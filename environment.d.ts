declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_CLIENT_URL: string;
      NEXT_PUBLIC_MAP_ACCESS_TOKEN: string;
      NEXT_PUBLIC_MAP_ID: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    }
  }
}
