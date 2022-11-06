import axios from "axios";

const url = "http://192.168.123.7:3001/users"

export const postUsers = async(user) =>{
    return await axios.post(url , user)
}