<script>

export default {
    name: "HelloWorld",
    data() {
        return {
            message: "hi",


        }
    },

    beforeCreate() {
        console.log("beforeCreate ", this.message)
    },
    created() {
        console.log("created ", this.message)

    },
    beforeMount() {
        console.log("beforeMount ", this.message)

    },
    mounted() {
        console.log("mounted ", this.message)

    },
    beforeUpdate() {
        console.log("beforeUpdate ", this.message)

    },
    updated() {
        console.log("updated ", this.message)

    },
    beforeUnmount() {
        console.log("beforeUnmount ", this.message)

    },
    unmounted() {
        console.log("unmounted ", this.message)

    },

}
</script>
<template>
    <main>
        <h1> hello !!!!</h1>
    </main>
</template>
<style scoped>
main {
    height: 100vh;
    width: 100vw;
    background-color: cyan;
}
</style>