import { create } from "zustand";
import { challengesDataTypes, globalUserStoreTypes, UserData } from "../TYPES";
import axios, { protectedAxios } from "../api/axios.config";
import {
  signInEndPoint,
  logOutEndPoint,
  verificationEndPoint,
  signUpEndPoint,
  forgotPasswordEndPoint,
  resetPasswordEndPoint,
} from "../utils/constants/constants";

const userGlobalStore = create<globalUserStoreTypes>((set) => ({
  error: "",
  loading: false,
  user: null,
  users: null,
  challenges: null,
  isAuthenticated: false,
  sendCheckAuth: false,
  setAuthState: (value: boolean) => {
    set({ isAuthenticated: value });
  },
  setUser: (
    user: UserData | null,
    users: UserData[] | null,
    challenges: challengesDataTypes[] | null
  ) => set({ user: user, users: users, challenges: challenges }),
  clearUser: () => set({ user: null }),
  signUp: async (password: string, email: string, username: string) => {
    set({ loading: true });
    try {
      const response = await axios.post<{ success: boolean; message: string }>(
        signUpEndPoint,
        {
          email: email,
          password: password,
          username: username,
        }
      );
      set({ loading: false });
      console.log(response);
    } catch (error:
      | {
          response: {
            data: {
              message: string;
              success: boolean;
            };
          };
        }
      | any) {
      set({
        error: error.response.data.message,
      });

      set({ loading: false });
    }
  },
  logIn: async (password: string, value: string) => {
    set({ loading: true });
    try {
      const response = await protectedAxios.post<{
        success: boolean;
        message: string;
      }>(signInEndPoint, {
        value: value,
        password: password,
      });
      set({ loading: false, sendCheckAuth: true });
      console.log(response.data);
    } catch (error:
      | {
          response: {
            data: {
              message: string;
              success: boolean;
            };
          };
        }
      | any) {
      set({
        error: error.response.data.message,
      });

      set({ loading: false });
    }
  },
  forgotPassword: async (email: string) => {
    set({ loading: true });
    try {
      const response = await protectedAxios.patch<{
        success: boolean;
        message: string;
      }>(forgotPasswordEndPoint, {
        email: email,
      });
      set({ loading: false });
      console.log(response.data);
    } catch (error:
      | {
          response: {
            data: {
              message: string;
              success: boolean;
            };
          };
        }
      | any) {
      set({
        error: error.response.data.message,
      });

      set({ loading: false });
    }
  },
  resetPassword: async (token: string | undefined, password: string) => {
    set({ loading: true });
    try {
      const response = await protectedAxios.put<{
        success: boolean;
        message: string;
      }>(`${resetPasswordEndPoint}/:${token}`, {
        password: password,
      });
      set({ loading: false });
      console.log(response.data);
    } catch (error:
      | {
          response: {
            data: {
              message: string;
              success: boolean;
            };
          };
        }
      | any) {
      set({
        error: error.response.data.message,
      });

      set({ loading: false });
    }
  },
  verifyUser: async (code: string) => {
    set({ loading: true });
    try {
      const response = await protectedAxios.put<{
        success: boolean;
        message: string;
      }>(verificationEndPoint, {
        code: code,
      });
      set({ loading: false, sendCheckAuth: true });
      console.log(response.data);
    } catch (error:
      | {
          response: {
            data: {
              message: string;
              success: boolean;
            };
          };
        }
      | any) {
      set({
        error: error.response.data.message,
      });

      set({ loading: false });
    }
  },
}));

export default userGlobalStore;
