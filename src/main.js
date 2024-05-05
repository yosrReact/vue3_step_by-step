import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import HelloWorld from "./components/HelloWorld.vue"
import HomePage from "./pages/HomePage.vue"
import AboutPage from "./pages/AboutPage.vue"
import routes from "./routes/app.routes"
const router = createRouter({
  history: createWebHistory(),
  routes,
  //   routes: [
  //     { path: "/", component: HomePage }, // we can have <template> instead of component
  //     { path: "/about", component: AboutPage },
  //   ],
})
const app = createApp(App).use(router)
// app.component("hello-world", HelloWorld)
app.mount("#app")
