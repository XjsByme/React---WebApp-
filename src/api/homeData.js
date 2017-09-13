import { get } from './getData';
import apiUrl from './apiUrl';

export function getAd() {
  return get(apiUrl.homeAd).then(res => res.json());
}

export function getList(city, page) {
  return get('/api/homelist/' + encodeURIComponent(city) + '/' + page).then(res => res.json());
}