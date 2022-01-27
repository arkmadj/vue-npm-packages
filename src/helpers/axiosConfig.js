import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
window.addEventListener('localstorage-changed', (event) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${event.detail.token}`;
});

export { axios };
