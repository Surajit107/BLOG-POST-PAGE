import React from 'react'

function CreatePostHead() {
  return (
    <div>
        <header className="masthead" style={{ backgroundImage: "url('assets/img/post-bg.jpg')" }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">
                            <h1>Create Your Post</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default CreatePostHead