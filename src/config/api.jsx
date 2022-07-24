import axios from "axios";

const baseURL = 'https://hackathon-650c8-default-rtdb.asia-southeast1.firebasedatabase.app/'

const instance = axios.create({baseURL})

export default instance