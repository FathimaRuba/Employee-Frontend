import axios from "axios";
import base_url from "./base_url";

export const addEmployee = async(data) => {
    return await axios.post(`${base_url}/addemp`,data)
}

export const getEmployee = async() => {
    return await axios.get(`${base_url}/employees`)
}

export const deleteEmployee = async(id) => {
    return await axios.delete(`${base_url}/delemp/${id}`)
}

export const updateEmployee = async(id,data) => {
    return await axios.put(`${base_url}/updateemp/${id}`,data)
}
