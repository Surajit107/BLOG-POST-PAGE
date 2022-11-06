import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {
                        pageNumbers.map((number) => {
                            return (
                                <li key={number} className="page-item">
                                    <a onClick={() => paginate(number)} className="page-link" href="!#" >{number}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
