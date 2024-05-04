<script setup>
import { onMounted, ref, watch } from 'vue'

const input = ref("")
const users = ref([])
const filteredUsers = ref([])
const search = (e) => {
    console.log(e)
    alert(input.value)
}
const onChange = (e) => {
    console.log(e)
}
onMounted(() => {


    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            users.value = json
            filteredUsers.value = json
        });
})
const unWatch = watch(input, (newValue, oldValue) => {
    console.log('newValue, oldValue: ', newValue, oldValue);
    // if (!newValue) return
    filteredUsers.value = users.value.filter((user) => user.name.toLowerCase().includes(newValue.toLowerCase()))
}, { immediate: true })    
</script>
<template>
    <main>
        <input type="text" v-model="input" @keyup="onChange">

        <button @click="search">Search</button>
        <p>Vous avez saisi: {{ input }}</p>
        <button @click="unWatch">UnWatch</button>
        <table>
            <tr v-for="user in filteredUsers" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.website }}</td>
            </tr>
        </table>
    </main>
</template>
<style scoped>
table,
th,
td {
    border: 1px solid;
}
</style>