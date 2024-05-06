import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import HelloWorld from "./components/HelloWorld.vue"
import HomePage from "./pages/HomePage.vue"
import AboutPage from "./pages/AboutPage.vue"
import routes from "./routes/app.routes"
import authMiddleware from "./middlewares/auth.middlewares"
const router = createRouter({
  history: createWebHistory(),
  routes,
  //   routes: [
  //     { path: "/", component: HomePage }, // we can have <template> instead of component
  //     { path: "/about", component: AboutPage },
  //   ],
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if (to.name !== "login" && !token) {
//     // next("/login")
//     next({ name: "login" })
//   } else if (to.name === "login" && token) {
//     next("/home")
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  console.log("to.meta.requireAuth: ", to.meta.requireAuth)
  if (to.meta && to.meta.requireAuth) {
    authMiddleware(to, from, next)
  }
  next()
})
const app = createApp(App).use(router)
// app.component("hello-world", HelloWorld)
app.mount("#app")
