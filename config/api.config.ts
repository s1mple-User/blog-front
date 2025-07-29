export const API_URL = "https://blog-back-4j9v.onrender.com"


export const getAuthUrl = (url: string) => `/api/auth/${url}`;
export const getLoginUrl = (url: string) => `/api/${url}`;
export const getBlogUrl = (url: string) => `/api/blog/${url}`;