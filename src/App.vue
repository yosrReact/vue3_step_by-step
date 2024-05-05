<script>
import MyProfile from './components/MyProfile.vue';

import HelloWorld from './components/HelloWorld.vue';
import UserCardParent from './components/UserCardParent.vue';
import SearchForm from './components/SearchForm.vue';
import AddItem from './components/AddItem.vue';
import AddItemOptions from './components/AddItemOptions.vue';
import InputDataBinding from './components/InputDataBinding.vue';
import Layout from './components/Layout.vue';
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
        },

      ],
      items: [],

    }
  },


  methods: {

    hello(name) {
      this.message = `Hello ${name}`
    },
    toggleCondition() {
      this.condition = !this.condition
    },
    onAddItem(payload) {
      console.log("input :", payload)
      this.items.push(payload)
    }
  },

  components: {
    MyProfile,
    HelloWorld,
    UserCardParent,
    SearchForm,
    AddItem,
    AddItemOptions,
    InputDataBinding,
    Layout
  }

}
</script>

<template>
  <template v-if="false">

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
    <h1>Props</h1>

    <user-card-parent />
    <h1>Events</h1>
    <search-form />
    <h1>Custom events</h1>
    <add-item @add="onAddItem" />
    <add-item-options @add="onAddItem" />
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
    <h1>Input data binding</h1>
    <input-data-binding />

    <h1>Watchers</h1>
    <search-form />


    <layout>
      <!-- it is a v-slot:default -->
      <p>
        Hello
      </p>
      <!-- end of it is a v-slot:footer -->
      <template v-slot:footer>
        <!-- or we can use <template #footer> -->
        <div>
          it is a footer
        </div>
      </template>
    </layout>
  </template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>

          <!-- <router-link to=" /" >Home</router-link> -->
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About</router-link>

          <!-- <router-link to="/about">About</router-link> -->
        </li>
        <li>
          <router-link :to="{ name: 'users' }">Users</router-link>

        </li>
      </ul>

    </nav>
  </header>
  <router-view></router-view>
</template>
<style>
body {

  box-sizing: border-box;
}
</style>