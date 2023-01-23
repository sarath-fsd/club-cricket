import axios from 'axios';
export function getNews() {
  return axios.get('/api/news').then((res) => res.data);
}
