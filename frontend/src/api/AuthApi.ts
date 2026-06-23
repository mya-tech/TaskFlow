const API_URL = "http://localhost:8080/api/auth";

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  userId: number;
  email: string;
  name: string;
}

export const registerUser = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Registration failed");
  return response.json();
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Login failed");
  return response.json();
};

export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const setToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

export const clearToken = (): void => {
  localStorage.removeItem("authToken");
};

export const isLoggedIn = (): boolean => {
  return !!getToken();
};
