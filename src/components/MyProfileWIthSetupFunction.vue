<template>
    <div>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name : {{ lastName }}</p>
        <p>FullName : {{ fullName }}</p>
        <button @click="$event => rename()">Change name</button>
    </div>
</template>
<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const firstName = ref("Yosr")
        const lastName = ref("Naija")
        function rename() {
            firstName.value = "Will"
            lastName.value = "Smith"
        }
        const fullName = computed(() => `${firstName.value} ${lastName.value}`)
        return {
            firstName,
            lastName,
            fullName,
            rename
        }
    }
    // computed: {
    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }

    // }
}
</script>
