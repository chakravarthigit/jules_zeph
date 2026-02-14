import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  reputation: number;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  interests: string[];
  discoveryRadius: number;
  setAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
  setOnboarded: (value: boolean) => void;
  setInterests: (interests: string[]) => void;
  setDiscoveryRadius: (radius: number) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  isOnboarded: false,
  interests: [],
  discoveryRadius: 2,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),
  setOnboarded: (value) => set({ isOnboarded: value }),
  setInterests: (interests) => set({ interests }),
  setDiscoveryRadius: (radius) => set({ discoveryRadius: radius }),
  logout: () => set({ user: null, isAuthenticated: false, isOnboarded: false }),
}));
