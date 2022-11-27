export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_REST_API_URL: string;
    }
  }
}
