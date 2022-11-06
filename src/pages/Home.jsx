import React, { useState, useEffect } from 'react'
import Header from '../components/core/home/Header'
import { useParams } from 'react-router-dom'
import { getBlogs } from '../services/BlogsApi'
import Pagination from './Pagination'
import BlogTitles from './BlogTitles'

function Home() {

    const [blog, setBlog] = useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const { id } = useParams()


    useEffect(() => {
        const getAllBlogs = async () => {
            const res = await getBlogs()
            setBlog(res.data)
        }
        getAllBlogs()
    }, [id])


    const indecOfLastPost = (currentPage * postPerPage)
    const indecOfFirstPost = (indecOfLastPost - postPerPage)
    const currentBlogs = blog.reverse().slice(indecOfFirstPost, indecOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <Header />

            <BlogTitles
                search={search}
                currentBlogs={currentBlogs}
                setSearch={setSearch}
            />

            <Pagination
                postPerPage={postPerPage}
                totalPosts={blog.length}
                paginate={paginate}
            />
        </>
    )
}

export default Home