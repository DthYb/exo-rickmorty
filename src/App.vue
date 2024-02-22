<script setup>
import { RouterView } from 'vue-router'
import  Headervue  from './components/Headervue.vue'
// import { RmData } from "./types/rickmortyconfiguration";
// import { RMConfig } from './hooks/configuration';


</script>

<template>
  <Headervue />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}
body {
  min-height: 95vh;
  height: 100%;
  background-color: rgb(22, 22, 22);
}

</style>
