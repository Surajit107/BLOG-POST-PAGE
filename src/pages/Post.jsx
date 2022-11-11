import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostHead from '../components/core/post/PostHead'
import { getSingleBlog } from '../services/BlogsApi'


function Post() {

  const [posts, setPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await getSingleBlog(id)
      setPosts(res.data)
      // console.log(res.data);
    }
    getAllPosts()
  }, [id])


  return (
    <div>
      <PostHead title={posts.title} subtitle={posts.subtitle} owner={posts.owner} date={posts.date} />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">

              <p className='fw-bold fs-3'> {posts.title} </p>
              <p className='fw-bold'> {posts.subtitle} </p>
              <p> {posts.post} </p>
              <p> {posts.owner} </p>
              <p> {posts.date} </p>
              <Link to="/" className="btn btn-primary btn-sm text-uppercase rounded-1">Read Less..</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Post