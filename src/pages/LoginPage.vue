<template>
    <div>
        <form>
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" />
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" />
                <button @click="authenticate">Login</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const username = ref("")
const password = ref("")
const authenticate = () => {
    localStorage.setItem("token", "123")
    //     const token = localStorage.getItem("token")
    //     if (token) {
    //         return true
    //     }
    //     return false
}
</script>