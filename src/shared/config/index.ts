// export const isDevEnv = NODE_ENV === "development";
export const NODE_ENV = process.env.NODE_ENV;
export const REST_API_URL =
  NODE_ENV === "production"
    ? process.env.REACT_APP_REST_API_URL
    : "http://localhost:8000";
