import api from './axios'

export const companionLogin = (data: { username: string; password: string }) =>
  api.post('/companion/auth/login', data)

export const getMe = () => api.get('/companion/auth/me')
