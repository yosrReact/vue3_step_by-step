<script setup>
import { ref } from 'vue'

const input = ref("Events")
const search = (e) => {
    console.log(e)
    alert(input.value)
}
const onChange = (e) => {
    console.log(e)
}
</script>
<template>
    <main>
        <input type="text" v-model="input" @keyup="onChange">

        <button @click="search">Search</button>
        <p>Vous avez saisi: {{ input }}</p>
    </main>
</template>