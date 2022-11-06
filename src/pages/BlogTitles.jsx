import React from 'react'
import { Link } from 'react-router-dom';

const BlogTitles = ({ search, currentBlogs, setSearch }) => {
    return (
        <div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <nav className="navbar bg-light">
                            <div className="container col-6">
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </form>
                            </div>
                        </nav>
                        <hr className="my-4" />

                        {
                            currentBlogs.filter((value) => {
                                if (search === "") {
                                    return value;
                                } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                    return value;
                                }
                            }).map((curBlog) => {
                                return (

                                    <div key={curBlog.id}>
                                        <div className="post-preview">
                                            <Link to={`/post/${curBlog.id}`}>
                                                <h2 className="post-title">{curBlog.title}</h2>
                                                <h3 className="post-subtitle">{curBlog.subtitle}</h3>
                                            </Link>
                                            <p className="post-meta">
                                                Posted by
                                                <Link to=""> {curBlog.owner} </Link>
                                                on {curBlog.date}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-end mb-4">
                                            <Link className="btn btn-primary btn-sm text-uppercase" to={`/post/${curBlog.id}`}>Read More...</Link>
                                        </div>
                                        <hr className="my-4" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTitles