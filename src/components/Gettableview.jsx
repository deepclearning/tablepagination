import React, {useState, useEffect} from "react";
import userData from "../data/users.js";
import './Gettableview.css'
import Pagination from './Pagination';
import usePagination from './usePagination';

export default function(){
    const [users, setUsers] = useState([])
    const [sorting, setSorting] = useState(null)
    const { pageSize, setPageSize, currentPage, setCurrentPage, goLeft, goRight, pages } = usePagination({pageLength: 5, totalItems:500}) 
    
    useEffect(()=>{
        setSorting(['first_name', 'last_name', 'company_name', 'city', 'state', 'zip', 'email','web', 'id'].reduce((agg, curr)=>({...agg, [curr] : null}), {}))
    },[])

    useEffect(() => {
        setUsers(userData.slice((currentPage-1)*pageSize, currentPage*pageSize));
    }, [currentPage])

    function onSort(event, sortKey){
        let tempUsers = [...users].sort((a, b) => {
            let comp = typeof a[sortKey] === 'string' ? a[sortKey].localeCompare(b[sortKey]) : a[sortKey] -  b[sortKey]
            if(!sorting[sortKey]){
                return comp
            }
            else{
                return sorting[sortKey] === 'asc' ? -1*comp : comp
            }
        })
        setUsers(tempUsers)
        setSorting(sorting=>({...sorting, [sortKey] : sorting[sortKey] === 'asc' ? 'desc' : 'asc'}))
    }

        return (
            <>
            <table className="user-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th onClick={e=>onSort(e,"first_name")}>First Name</th>
                        <th onClick={e=>onSort(e,"last_name")}>Last Name</th>
                        <th onClick={e=>onSort(e,"company_name")}>Company Name</th>
                        <th onClick={e=>onSort(e,"city")}>City</th>
                        <th onClick={e=>onSort(e,"state")}>State</th>
                        <th onClick={e=>onSort(e,"zip")}>Zip</th>
                        <th onClick={e=>onSort(e,"email")}>Email</th>
                        <th onClick={e=>onSort(e,"web")}>Web</th>
                        <th onClick={e=>onSort(e,"id")}>Id</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(({first_name, last_name, company_name, city, state, zip, email, web, id})=> 
                    <tr key={id}>
                        <td>{first_name} </td>
                        <td>{last_name} </td>
                        <td>{company_name} </td>
                        <td>{city} </td>
                        <td>{state} </td>
                        <td>{zip} </td>
                        <td>{email} </td>
                        <td>{web} </td>
                        <td>{id} </td>
                    </tr>)}
                </tbody>
            </table>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
        );
} 
