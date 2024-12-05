import { create } from "zustand";

export type States = {
  name: string;
  info: {
    district: string;
    city: string;
    category: string;
    urgency: string;
    description?: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setInfo: (info: States["info"]) => void;
};

const initialState: States = {
  name: "",
  info: {
    district: "",
    city: "",
    category: "",
    urgency: "",
    description: "",
  },
};

export const useInfoStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setInfo: (info) => set((state) => ({ ...state, info })),
}));
