import axios from 'axios';

const service = axios.create({
 baseURL: 'http://localhost:3000',
 withCredentials: true
})

const AUTH_SERVICE = {
 SIGNUP: async (userData) => {
  return await service.post('/signup', userData)
 },

 LOGIN: async (userData) => {
  return await service.post('/login', userData)
 },

 PROFILE: async () => {
  return await service.get('/profile')
 },
}

export default AUTH_SERVICE;