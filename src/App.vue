<script>
import MyProfile from './components/MyProfile.vue';

import HelloWorld from './components/HelloWorld.vue';
import UserCardParent from './components/UserCardParent.vue';
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
      condition: true,
      htmlContent: "<strong>hello </strong>",
      link: "http://www.google.com",
      inputAttributes: {
        type: "text",
        disabled: true,
        style: "padding:10px 20px" // on peut les écrire sous forme d'objet
      },
      fruits: [
        {
          name: "Banana", price: 20, active: true
        },
        {
          name: "Apple", price: 50, active: false
        },
        {
          name: "Orange", price: 10, active: true
        }

      ]

    }
  },


  methods: {

    hello(name) {
      this.message = `Hello ${name}`
    },
    toggleCondition() {
      this.condition = !this.condition
    }
  },

  components: {
    MyProfile,
    HelloWorld,
    UserCardParent

  }

}
</script>

<template>
  <h1>Use of reactive data</h1>
  <!-- we have to return a value -->
  <p>{{ 'This is my message :' + message }}</p>

  <br />
  <h1>Use of conditions</h1>

  <strong>1st solution</strong>

  <p>{{ condition ? message : "no display " }}</p>
  <strong>2nd solution</strong>
  <p v-if="condition">{{ message }}</p>
  <p v-else>no-display</p>
  <br />
  <h1>Use of html content</h1>

  <p v-html="htmlContent"></p>
  <br />
  <h1>Use of events</h1>

  <button @click="$event => hello('John')">Change message</button>
  <br />
  <br />

  <button @click="toggleCondition">Toggle Condition</button>

  <br />
  <h1>Use of v-bind</h1>
  <strong>1st solution : </strong>
  <a v-bind:href="link">Link to google</a>
  <br />
  <strong>2nd solution : </strong>
  <a :href="link">Link to google</a>

  <h1>Use of v-bind : another example </h1>
  <input :disabled="condition" :placeholder="message" />
  <input v-bind="inputAttributes" />
  <br />
  <h1>Use of v-for</h1>
  <ul>
    <li v-for="fruit in fruits" :key="fruit">
      {{ fruit.name }}: {{ fruit.price }}
    </li>
  </ul>

  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit.name }}: {{ fruit.price }}
    </li>
  </ul>
  <ul>
    <li v-for="({ name, price }, index) in fruits" :key="index">
      {{ name }}: {{ price }}
    </li>
  </ul>
  <ul>
    <template v-for="({ name, price, active }, index) in fruits" :key="index">
      <li v-if="active">
        {{ name }}: {{ price }}
      </li>
    </template>
  </ul>
  <ul>
    <template v-for="({ name, price, active }, index) in fruits" :key="index">
      <li v-show="active">
        {{ name }}: {{ price }}
      </li>
    </template>
  </ul>
  <h1>Life cycle</h1>
  <div v-if="condition">
    <MyProfile />
  </div>
  <user-card-parent />
</template>
<style>
body {

  box-sizing: border-box;
}
</style>