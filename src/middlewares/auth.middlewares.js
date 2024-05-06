export default function authMiddleware(to, from, next) {
  const token = localStorage.getItem("token")
  if (to.name !== "login" && !token) {
    // next("/login")
    next({ name: "login" })
  } else if (to.name === "login" && token) {
    next("/home")
  } else {
    next()
  }
}
