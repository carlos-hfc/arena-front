import Cookies from "js-cookie"

export const getToken = () => Cookies.get("@arena-next")

export const setToken = (token: string) =>
  Cookies.set("@arena-next", token, {
    expires: 7,
  })
