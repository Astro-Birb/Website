import { create } from 'zustand'

type SaveStore = {
  hasUnsavedChanges: boolean
  setUnsavedChanges: (state: boolean) => void
  onSave: () => Promise<void>
  setOnSave: (fn: () => Promise<void>) => void
}

export const useSaveStore = create<SaveStore>((set) => ({
  hasUnsavedChanges: false,
  setUnsavedChanges: (state) => set({ hasUnsavedChanges: state }),
  onSave: async () => {},
  setOnSave: (fn) => set({ onSave: fn }),
}))