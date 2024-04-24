<script>
import UserCard from './UserCard.vue'
export default {
    components: {
        UserCard
    }
}
</script>
<template>
    <main>
        <h1>Props</h1>
        <user-card username="yosr-naija" first-name="yosr" :age="15" />

    </main>

</template>