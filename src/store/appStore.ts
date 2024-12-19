import { create } from "zustand";
import { globalAppStoreTypes } from "../TYPES";

const globalAppStore = create<globalAppStoreTypes>((set) => ({
  isMobileNavBar: false,
  setIsMobileNavBar: (value: boolean) => {
    set({ isMobileNavBar: value });
  },
}));

export default globalAppStore;
