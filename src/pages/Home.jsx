import React, { useState, useEffect } from 'react'
import Header from '../components/core/home/Header'
import { useParams } from 'react-router-dom'
import { getBlogs } from '../services/BlogsApi'
import Pagination from './Pagination'
import BlogTitles from './BlogTitles'

function Home() {

    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const { id } = useParams()


    useEffect(() => {
        const getAllBlogs = async () => {
            const res = await getBlogs()
            setBlogs(res.data)
        }
        getAllBlogs()
    }, [id])


    const indexOfLastPost = (currentPage * postPerPage)
    const indexOfFirstPost = (indexOfLastPost - postPerPage)
    const currentBlogs = blogs.reverse().slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <Header />

            <BlogTitles
                search={search}
                setSearch={setSearch}
                currentBlogs={currentBlogs}
            />

            <Pagination
                postPerPage={postPerPage}
                totalPosts={blogs.length}
                paginate={paginate}
            />
        </>
    )
}

export default Home