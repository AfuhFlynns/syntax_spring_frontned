import { create } from "zustand";
import { globalUserStoreTypes, UserData } from "../TYPES";
import axios from "../api/axios.config";
import {
  signInEndPoint,
  logOutEndPoint,
  verificationEndPoint,
} from "../utils/constants/constants";

const userGlobalStore = create<globalUserStoreTypes>((set) => ({
  error: new Error(""),
  loading: false,
  user: null,
  isCheckingAuth: false,
  setUser: (user: UserData | null) => set({ user }),
  clearUser: () => set({ user: null }),
  signUp: (password: string, email: string, username: string) => {},
  logIn: (password: string, value: string) => {},
  verifyUser: (code: string) => {},
}));

export default userGlobalStore;
