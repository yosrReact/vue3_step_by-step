<script setup>
import { onMounted } from 'vue'
// props: ["username", "firstName", "lastName", "age", "location"]
// We can make const props =defineProps({}) 
// but be careful : don't make destructuring because we lost reactivity
defineProps({
    username: {
        type: String,
        required: true,
        default: "Will"
    },
    firstName: {
        type: String,
        required: true,

    },
    lastName: String,
    age: {
        type: Number,
        validator: (value) => value > 10
    },
    location: String
})
// onMounted(() => {
//     console.log(props)
// })
</script>
<template>
    <h1>User card</h1>
    <div>
        <p>Username: {{ username }}</p>
        <p>First name: {{ firstName }}</p>
        <p>Last name: {{ lastName }}</p>
        <p>Age: {{ age }}</p>
        <p>Location: {{ location }}</p>
    </div>
</template>