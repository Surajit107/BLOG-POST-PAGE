import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreatePostHead from '../components/core/createpost/CreatePostHead';

import { blogs } from '../services/BlogsApi'

const CreatePost = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  const month = monthNames[d.getMonth()]
  const date = [new Date().getDate()]
  const year = [new Date().getFullYear()]

  const cmpltDate = `${month} ${date} , ${year}`

  const [blog, setBlog] = useState({
    "title": "",
    "subtitle": "",
    "post": "",
    "owner": "",
    "date": cmpltDate
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setBlog({ ...blog, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    blogs(blog)
    navigate('/')
  }

  return (
    <div>
      <CreatePostHead/>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>Want to post your content? Fill out the form below to submit your content as soon as possible!</p>
              <div className="my-5">

                <form id="contactForm" onSubmit={handleSubmit}>

                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="owner"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                      name='owner'
                      value={blog.owner}
                      onChange={handleChange}
                    />
                    <label htmlFor="owner">Name</label>
                  </div>

                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="title"
                      type="text"
                      placeholder="Title Of Your Blog"
                      data-sb-validations="required"
                      name='title'
                      value={blog.title}
                      onChange={handleChange}
                    />
                    <label htmlFor="title">Title Of Your Blog</label>
                  </div>

                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="subtitle"
                      type="text"
                      placeholder="Write a subtitle, if any..." data-sb-validations="required,email"
                      name='subtitle'
                      value={blog.subtitle}
                      onChange={handleChange}
                    />
                    <label htmlFor="subtitle">Write a subtitle, if any</label>
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="post"
                      placeholder="Write Your Post Here"
                      style={{ height: "12rem" }} data-sb-validations="required"
                      name='post'
                      value={blog.post}
                      onChange={handleChange}
                    />
                    <label htmlFor="post">Write Your Post Here</label>
                  </div>
                  <br />

                  <button className="btn btn-primary text-uppercase rounded-1" id="submitButton" type="submit">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CreatePost