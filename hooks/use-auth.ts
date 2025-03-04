import { create } from 'zustand'

interface SignInStore {
     email: string
     password: string
     setEmail: (email: string) => void
     setPassword: (password: string) => void
}

export const useSignInStore = create<SignInStore>((set) => ({
     email: '',
     password: '',
     setEmail: (email) => set({ email }),
     setPassword: (password) => set({ password }),
}))
