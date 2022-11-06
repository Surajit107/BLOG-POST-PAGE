import axios from "axios";

const url = "http://192.168.123.7:3002/blogs"

export const getBlogs = async() =>{
    try{
        return await axios.get(`${url}`)
    }catch(error){
        console.log(error.message);
    }
}

export const getSingleBlog = async(id) =>{
    try{
        return await axios.get(`${url}/${id}`)
    }catch(error){
        console.log(error.message);
    }
}

export const blogs = async(blog) =>{
    try{
        return await axios.post(url , blog)
    }catch(error){
        console.log(error.message);
    }
}