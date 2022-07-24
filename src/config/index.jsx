import instance from './api'


export const createNewUser = (data, userId) => instance.put(`/users/${userId}.json`, data)

export const getUsers = (userId) => instance.get(`/users/${userId}.json`)

export const resumeCreate = (data, userId) => instance.patch(`users/${userId}/resume/.json`, data)

export const getResume = (userId) => instance.get(`users/${userId}/resume/.json`)