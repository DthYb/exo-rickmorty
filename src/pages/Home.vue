<script setup>
import Card from "../components/Card.vue";
import { onMounted, ref } from 'vue';
import axios from 'axios';
// import { RmData } from "@/types/rickmortyconfiguration";

// const { data } = defineProps<{ data: RmData }>();

const ricklist = ref([])

onMounted(async () => {
   const response = await axios.get("https://rickandmortyapi.com/api/character/");
   ricklist.value = response.data;
   console.log(response.data);
});

// const character = computed(() => {
//     if(ricklist.value)
//         return [];
//      return ricklist.value.filter(x => x)
// })
</script>

<template>
    <body>
        <div class="flex flex-col items-center">
            <h1 class="text-2xl text-white font-bold">Bienvenue sur l'app Rick & Morty</h1>
        </div>
        <div class="flex mx-5">
            <Card v-for="item in ricklist" :data:="item" />
        </div>
    </body>
</template>