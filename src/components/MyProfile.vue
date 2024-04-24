<template>
    <div>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name : {{ lastName }}</p>
        <p>FullName : {{ fullName }}</p>
        <button @click="$event => rename()">Change name</button>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const firstName = ref("Yosr")
const lastName = ref("Naija")
function rename() {
    firstName.value = "Will"
    lastName.value = "Smith"
}
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

</script>
