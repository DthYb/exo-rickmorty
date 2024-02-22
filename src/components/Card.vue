<script setup>
defineProps({
    name: {
        type: String,
    },
    img: {
        type: String,
    }
})
</script>

<template>
    <div class="border rounded-2xl p-2 bg-neutral-700">
        <img :src="img" class="h-[300px] w-[250px]"/>
        <div class="border-t flex justify-center font-bold text-lg text-white">
            <p>{{ name }}</p>
        </div>
    </div>
</template>