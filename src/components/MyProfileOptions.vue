<template>
    <div>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name : {{ lastName }}</p>
        <p>FullName : {{ fullName }}</p>
        <button @click="$event => rename()">Change name</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'Yosr',
            lastName: 'Naija'
        }
    },
    methods: {
        rename() {
            this.firstName = "Will"
            this.lastName = "Smith"
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }

    }
}
</script>
