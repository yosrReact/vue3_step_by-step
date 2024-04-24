<script>
import MyProfile from './components/MyProfile.vue';

// import HelloWorld from './components/HelloWorld.vue';
// export default {
//   name: "App",
//   components: {
//     HelloWorld
//   }
// }

// import MyProfile from './components/MyProfile.vue'
export default {
  name: "App",
  data() {
    return {
      message: "hi",

    }
  },

  methods: {

    hello(name) {
      this.message = `Hello ${name}`
    }
  },

  components: {
    MyProfile
  }

}
</script>

<template>
  <!-- <main>
    <hello-world />
  </main> -->
  <h1>API Styles</h1>
  <p>{{ message }}</p>
  <MyProfile />

  <button @click="$event => hello('John')">Change message</button>
</template>
