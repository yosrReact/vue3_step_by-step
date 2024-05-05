<template>
    <div>
        Users
        <table>
            <tr v-for="user in users" :key="user.id">
                <td>
                    <router-link :to="{ name: 'userDetails', params: { id: user.id } }">{{ user.name }}</router-link>

                </td>
            </tr>
        </table>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const users = ref([
    { id: 1, name: "Yosr" },
    { id: 2, name: "Naija" },
    { id: 3, name: "Will" },
    { id: 4, name: "Smith" },
    { id: 5, name: "John" }
])
</script>