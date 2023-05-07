import axios from "axios";

const url = "http://localhost:3001/users"

export const postUsers = async(user) =>{
    return await axios.post(url , user)
}