// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawerState: true,
  }),
  actions:{
    toggleDrawerState(){
      this.drawerState = !this.drawerState
    }
  }
})
