import axios, { AxiosError } from "axios";
import { authService } from "./authService";
import { router } from "../router";
import { urls } from "../constants/urls";

export const apiService = axios.create({ baseURL: '/api' });

let isRefreshing = false;

apiService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
});

apiService.interceptors.response.use(res => {
    return res;
},
    async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    await authService.refresh();
                    isRefreshing = false;

                    return apiService(originalRequest)
                } catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    await router.navigate('/login?sessionExpired=true');

                    return Promise.reject(error);
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);