export const apiBaseUrl =
  process.env.NODE_ENV == "development"
    ? "www.dev.api.pieash.com"
    : "www.prod.api.pieash.com";
