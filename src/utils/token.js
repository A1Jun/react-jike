// 封装和token相关的方法 存 取 删

const TOKEN = 'token'

export function getToken() {
  return localStorage.getItem(TOKEN)
}

export function setToken(token) {
  localStorage.setItem(TOKEN, token)
}

export function removeToken() {
  localStorage.removeItem(TOKEN)
}
