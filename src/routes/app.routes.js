import AboutPage from "@/pages/AboutPage.vue"
import HomePage from "@/pages/HomePage.vue"

export default [
  { name: "home", path: "/", alias: "/home", component: HomePage }, // we can have <template> instead of component
  { name: "about", path: "/about", component: AboutPage },
  {
    name: "users",
    path: "/users",
    component: () => import("@/pages/UsersPage.vue"),
  },
  {
    name: "userDetails",
    path: "/users/:id",
    component: () => import("@/pages/UserPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home", params: {} },
  },
]
