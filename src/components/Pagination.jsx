import React from 'react'
export default function Pagination({ pageSize = 10, setPageSize = null, currentPage = 1, setCurrentPage, goLeft = null, goRight = null, pages = [] }){
    return (
        <div className="flex pagination-container">
            <ul className="pages">
                {pages.map(p =>
                    <li onClick={e => setCurrentPage(p)} className={`page-number ${currentPage === p ? 'active' : ''}`}>{p}</li>
                )}
            </ul>
        </div>
    )
}