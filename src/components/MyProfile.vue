<template>
    <div>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name : {{ lastName }}</p>
        <p>FullName : {{ fullName }}</p>
        <button @click="$event => rename()">Change name</button>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, onUpdated, onBeforeMount, onBeforeUpdate, } from 'vue'

const firstName = ref("Yosr")
const lastName = ref("Naija")
function rename() {
    firstName.value = "Will"
    lastName.value = "Smith"
}
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
onBeforeMount(() => {
    console.log("onBeforeMount ", firstName.value)

})
onMounted(() => {
    console.log("onMounted ", firstName.value)
}
)
onBeforeUpdate(() => {
    console.log("onBeforeUpdate ", firstName.value)
})
onUpdated(() => {
    console.log("onUpdated ", firstName.value)
}
)
onUnmounted(() => {
    console.log("onUnmounted ", firstName.value)

})
</script>
