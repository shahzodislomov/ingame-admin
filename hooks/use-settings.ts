import { create } from 'zustand'

interface SettingsState {
     userName: string
     email: string
     profileImage: string
     oldPassword: string
     password: string
     confirmPassword: string
     setUserName: (name: string) => void
     setEmail: (email: string) => void
     setProfileImage: (image: string) => void
     setOldPassword: (oldPassword: string) => void
     setPassword: (password: string) => void
     setConfirmPassword: (confirmPassword: string) => void
     resetPasswords: () => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
     userName: 'Admin Adrian',
     email: 'admin@example.com',
     profileImage: 'https://via.placeholder.com/150',
     oldPassword: '',
     password: '',
     confirmPassword: '',

     setUserName: (name: string) => set({ userName: name }),
     setEmail: (email: string) => set({ email }),
     setProfileImage: (image: string) => set({ profileImage: image }),
     setOldPassword: (oldPassword: string) => set({ oldPassword }),
     setPassword: (password: string) => set({ password }),
     setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
     resetPasswords: () => set({ password: '', confirmPassword: '', oldPassword: '' }),
}))
