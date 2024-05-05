import UsersLayout from "@/components/UsersLayout.vue"
import AboutPage from "@/pages/AboutPage.vue"
import HomePage from "@/pages/HomePage.vue"
import UsersPage from "@/pages/UsersPage.vue"
import UserPage from "@/pages/UserPage.vue"

export default [
  { name: "home", path: "/", alias: "/home", component: HomePage }, // we can have <template> instead of component
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
