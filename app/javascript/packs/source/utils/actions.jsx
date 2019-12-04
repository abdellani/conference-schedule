const LOGIN = (name) => {
  return {
    type: "LOGIN",
    name
  }
}
const LOGOUT = () => {
  return { type: "LOGOUT" }
}

export { LOGIN, LOGOUT };