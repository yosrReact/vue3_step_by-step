<script>
export default {
    emits: {
        // si on a un evt update, par défault pas de validation mais si on veut le faire explicitement
        // on met null
        update: null,
        //validation de l'évenement soumis : false veut dire non validé
        add(input) {
            console.log("first")
            return !!input
        }
    },
    data() {
        return {
            input: ""
        }
    },
    methods: {
        submit() {
            this.$emit('add', this.input)
            this.input = ""
        }
    }
}
</script>


<template>
    <main>
        <input type="text" v-model="input" placeholder="type something ...">

        <button @click="submit">+</button>
    </main>
</template>