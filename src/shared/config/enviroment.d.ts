declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_REST_API_URL: string;
    }
  }
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
