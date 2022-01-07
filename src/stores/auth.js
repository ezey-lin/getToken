import { defineStore } from 'pinia'
import getWsConfig from '@/assets/apis/getWsConfig.js'
export const auth = defineStore({
  id: 'auth',
  state: () => ({
    wsConfig:{},
  }),
  getters: {

  },
  actions: {
      async setData(){
        this.wsConfig = await getWsConfig()
        //獲取到後填入上方state
        console.log('this.wsConfig',this.wsConfig);
      }
  }
})