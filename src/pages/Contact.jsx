import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactHead from '../components/core/contact/ContactHead'
import { postUsers } from '../services/ContactApi'

function Contact() {

    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "message": ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    // console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault()
        postUsers(user)
        navigate('/')
    }

    return (
        <div>
            <ContactHead />
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <div className="my-5">
                            
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="form-floating">
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name..."
                                            data-sb-validations="required"
                                            name='name'
                                            value={user.name}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="name">Name</label>
                                    </div>

                                    <div className="form-floating">
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email..." data-sb-validations="required,email"
                                            name='email'
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="email">Email address</label>
                                    </div>

                                    <div className="form-floating">
                                        <input
                                            className="form-control"
                                            id="phone"
                                            type="tel"
                                            placeholder="Enter your phone number..."
                                            data-sb-validations="required"
                                            maxLength={10}
                                            name='phone'
                                            value={user.phone}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>

                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Enter your message here..." style={{ height: "12rem" }} data-sb-validations="required"
                                            name='message'
                                            value={user.message}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary text-uppercase rounded-1" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact