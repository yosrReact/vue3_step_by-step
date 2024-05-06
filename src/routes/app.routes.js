import UsersLayout from "@/components/UsersLayout.vue"
import AboutPage from "@/pages/AboutPage.vue"
import HomePage from "@/pages/HomePage.vue"
import UsersPage from "@/pages/UsersPage.vue"
import UserPage from "@/pages/UserPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import SimpleLayout from "@/components/SimpleLayout.vue"

export default [
  {
    name: "home",
    path: "/",
    alias: "/home",
    component: HomePage,
    meta: { requireAuth: true },
  }, // we can have <template> instead of component
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    meta: { layout: SimpleLayout },
  },
  { name: "about", path: "/about", component: AboutPage },
  {
    name: "usersLayout",
    path: "/users",
    component: UsersLayout,
    children: [
      {
        name: "users",
        path: "",
        component: UsersPage,
      },
      {
        name: "userDetails",
        path: ":id",
        component: UserPage,
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home", params: {} },
  },
]
