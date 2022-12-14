import React from 'react'

function PostHead({title , subtitle, owner, date}) {
    return (
        <div>
            <header className="masthead" style={{ backgroundImage: "url('assets/img/about-bg.jpg')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <div className="post-heading">
                                <h1>{title}</h1>
                                <h2 className="subheading">{subtitle}</h2>
                                <span className="meta">
                                    Posted by
                                    <a href="#!" className='text-warning'> {owner} </a>
                                    on {date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default PostHead