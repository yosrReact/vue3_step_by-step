<script>
import { watch } from 'vue'
export default {
    data() {
        return {
            input: "",
            users: [],
            filteredUsers: []
        }
    },
    methods: {
        search(e) {
            console.log(e)
            alert(this.input)
        },

    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                users.value = json
                filteredUsers.value = json
            });
        // this.$watch('value', function () {
        //     ....
        // }
    },
    watch: {
        input: {

            handler(newValue, oldValue) {
                console.log('newValue, oldValue: ', newValue, oldValue);
                // if (!newValue) return
                this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(newValue.toLowerCase()))


            },
            immediate: true
        }
    }
}

</script>
<template>
    <main>
        <input type="text" v-model="input" @keyup="onChange">

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