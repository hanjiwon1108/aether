import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create base instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Optionally inject auth tokens here
    // const token = useAuthStore.getState().token;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lies within the range of 2xx triggers this function
    return response.data;
  },
  (error: AxiosError) => {
    // Any status codes outside the range of 2xx trigger this function
    // Example: show global error toast mapping through Zustand or Sonner
    const { response } = error;
    if (response?.status === 401) {
      // handle unauthorized
    } else if (response?.status === 403) {
      // handle forbidden
    } else if (response?.status && response.status >= 500) {
      // handle server error
      console.error("Server error occurred:", response.data);
    }
    return Promise.reject(error);
  },
);
