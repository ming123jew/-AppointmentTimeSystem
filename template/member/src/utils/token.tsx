
const Tokey_Key = ""

const setToken = (token: string) => {
  return window.localStorage.setItem(Tokey_Key, token)
}

const getToken = () => {
  return window.localStorage.getItem(Tokey_Key)
}

const removeToken =() => {
  return window.localStorage.removeItem(Tokey_Key)
}

export {
  setToken,
  getToken,
  removeToken
}