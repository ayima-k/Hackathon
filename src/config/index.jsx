import instance from './api'

export const createNewUser = (data) => instance.post('/users/.json', data)