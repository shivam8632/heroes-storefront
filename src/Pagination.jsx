import React, {useState} from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    var testAct = 'active'

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    if(pageNumbers[0] === '1') {
        testAct = 'hide'
    }

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav className={`paginate ${testAct}`}>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        >
                        
                        Previous
                    </a>
                </li>
                {pageNumbers?.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            >
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        >
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination