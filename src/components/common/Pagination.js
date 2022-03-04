import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext
    
    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <Link className="gradient-text" to={previousPagePath} rel="prev">
                           ← Previous
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && 
            <div className="pagination-boxes">
                {[...Array(numberOfPages)].map((e,i)=>(
                    <div key={i} 
                         className={`pagination-box ${ i+1 == humanPageNumber ? "pagination-box-active" : ""}`} 
                    >
                        {i+1}
                    </div>
                ))}
            </div>
            
            }
            <div>
                {nextPagePath && (

                    <Link className="gradient-text" to={nextPagePath} rel="next">
                            Next ➔
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
