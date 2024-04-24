<script>
export default {
    // props: ["username", "firstName", "lastName", "age", "location"]
    props: {
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
        age: Number,
        location: String
    }

}
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