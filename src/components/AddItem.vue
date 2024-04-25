<script setup>
import { ref } from 'vue'
// const emit = defineEmits(['add'])
const emit = defineEmits({
    add(input) {
        return false
    }
})

const input = ref("")
const submit = (e) => {
    console.log('e: ', e);
    emit('add', input.value)
    input.value = ""
}
const onChange = (e) => {
    console.log(e)
}
</script>
<template>
    <main>
        <input type="text" v-model="input" placeholder="type something ..." @keydown.enter="submit">

        <button @click="submit">+</button>
        <button @click="$emit('add', input)">2nd solution +</button>
    </main>
</template>