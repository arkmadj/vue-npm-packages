export const getUser = () => getObj('user');

const getObj = (key) => {
  return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))
}
