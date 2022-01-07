<script setup>
import { onMounted } from 'vue-demi'
import { auth } from '../stores/auth'
const authStore = auth()
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const createWebsocket = ()=>{
  //假設這裡要用獲取的token創建一個Websocket
  console.log(authStore.wsConfig); //1.還未取到

  //2.下方是為解決這個問題只能再取一次，可是這樣在App.vue取就好像沒意義了
  // let wsConfig = authStore.setData()
  // console.log(wsConfig);
}
onMounted(() => {
  createWebsocket();//創建一個Websocket
})
</script>

<template>
  <div class="greetings">
    <p> {{ msg }} </p>
  </div>
</template>
