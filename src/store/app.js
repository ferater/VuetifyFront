// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawerState: true,
    drawerOrder:0,
    navBarHeight:50,
  }),
  actions:{
    toggleDrawerState(){
      this.drawerState = !this.drawerState
    },
    setDrawerOrder(){
      if(this.drawerOrder == 0){
        this.drawerOrder = -1;
      } else {
        this.drawerOrder = 0;
      }
    }
  }
})
