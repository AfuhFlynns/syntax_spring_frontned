import { create } from "zustand";
import { globalAppStoreTypes } from "../TYPES";

const globalAppStore = create<globalAppStoreTypes>((set) => ({
  isMobileNavBar: false,
  challengeTitle: "",
  setIsMobileNavBar: (value: boolean) => {
    set({ isMobileNavBar: value });
  },
  setChallengeTitle: (value: string) => {
    set({ challengeTitle: value });
  },
}));

export default globalAppStore;
