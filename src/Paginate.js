import React from 'react'

function Paginate({ totalPost, postPerPage, prevPage, nextPage, paginates,disable }) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <>
            <nav className='paginateNav'>
                <ul>
                    <li> <a onClick={() => prevPage()} href="#"> Prev </a>  </li>
                    {pageNumber.map(numbers => (
                        <li key={numbers}>
                            <a onClick={() => paginates(numbers)} href="#">
                                {numbers}
                            </a>
                        </li>
                    ))}
                    <li> <button onClick={() => nextPage()} disabled={!totalPost} >  Next </button>  </li>
                </ul>
            </nav>
        </>
    )
}

export default Paginate