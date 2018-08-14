import store from 'store'
const TokenKey = 'token'

export function getToken(tokenKey) {
  return store.get(TokenKey)
}

export function setToken(token) {
  return store.set(TokenKey, token)
}

export function removeToken() {
  return store.remove(TokenKey)
}
