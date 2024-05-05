<template>
    <h1>
        Hello my user id is {{ $route.params.id }}
        <br />
        Hello my user id is {{ userId }}

    </h1>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const userId = ref(useRoute().params.id)


</script>