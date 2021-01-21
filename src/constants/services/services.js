import Axios from 'axios';

export const baseRequest = "http://localhost:8080";

export const getAllUsers = () => Axios.get(`${baseRequest}/users`);
export const getOneUser = (id) => Axios.get(`${baseRequest}/users/${id}`);

export const updateStatus = (id, payload) => Axios.patch(`${baseRequest}/users/${id}/status`, payload);

export const createUser = (payload) => Axios.post(`${baseRequest}/users`, payload);

export const deleteUser = (id) => Axios.delete(`${baseRequest}/users/delete/${id}`);

export const updateUser = (id, payload) => Axios.put(`${baseRequest}/users/${id}`, payload);