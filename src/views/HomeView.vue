<script setup>
import TradePart from '../components/tradePart.vue';
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TradePart msg="hello!"></TradePart>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
