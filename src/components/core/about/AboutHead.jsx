import React from 'react'

function AboutHead() {
  return (
    <div>
        <header className="masthead" style={{"backgroundImage": "url('assets/img/about-bg.jpg')"}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="page-heading">
                            <h1>About Me</h1>
                            <span className="subheading">This is what I do.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default AboutHead