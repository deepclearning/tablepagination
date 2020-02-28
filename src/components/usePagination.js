import React, {useState, useEffect, useCallback, useMemo} from 'react';

export default function usePagination({pageLength=10, currentPageLength=10,activePage=1,visiblePages=5, totalItems=50000, ...rest}){
    const [pageSize, setPageSize] = useState(10);
    const [currentPage,setCurrentPage] = useState(1)
    
    useEffect(()=>{
        setPageSize(pageLength)
        setCurrentPage(activePage)
    },[currentPageLength, activePage])

    let pages=useMemo(()=>{
        let pages=[]
        if (totalItems && totalItems > 0) {
            const possiblePages = Math.ceil(totalItems / pageSize);
            if (possiblePages <= visiblePages) {
                pages = Array(possiblePages).fill(0).map((i, idx) =>idx + 1)
                console.log({pages})
            }
            else if (possiblePages > visiblePages) {
                pages = Array(visiblePages).fill(0).map((i, idx) => (idx + currentPage))
            }
        }
        return pages
    },[totalItems, pageSize, visiblePages, currentPage])

    function goLeft(){
        if(currentPageLength > 1){
            setCurrentPage(currentPage=>currentPage-1)
        }
    }
    function goRight(){
        setCurrentPage(currentPage=>currentPage + 1)
    }
    return {pageSize, setPageSize, currentPage, setCurrentPage, goLeft, goRight, pages}
}