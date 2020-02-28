import React, {useState, useEffect} from "react";
import userData from "../data/users.js";
import './Gettableview.css'
import Pagination from './Pagination';
import usePagination from './usePagination';

export default function(){
    const [users, setUsers] = useState([])
    const [sorting, setSorting] = useState({})
    const { pageSize, setPageSize, currentPage, setCurrentPage, goLeft, goRight, pages } = usePagination({pageLength: 5, totalItems:500}) 
    const [lastActiveSort, setLastActiveSort] = useState(null)
    
    useEffect(()=>{
        setSorting(['first_name', 'last_name', 'company_name', 'city', 'state', 'zip', 'email','web', 'id'].reduce((agg, curr)=>({...agg, [curr] : null}), {}))
    },[])

    useEffect(() => {
        const slicedData = userData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        if(lastActiveSort){
            setUsers(getSortedData(slicedData, lastActiveSort, sorting))
        }
        else{
            setUsers(slicedData)
        }
    }, [currentPage, sorting])

    function getSortedData(arr, sortKey, sorting){
        return arr.sort((a, b) => {
            let comp = typeof a[sortKey] === 'string' ? a[sortKey].localeCompare(b[sortKey]) : a[sortKey] - b[sortKey]
            if (!sorting[sortKey]) {
                return comp
            }
            else {
                return sorting[sortKey] === 'asc' ? -1 * comp : comp
            }
        })
    }

    function onSort(event, sortKey){
        setUsers(getSortedData(users, sortKey, sorting))
        setLastActiveSort(sortKey)
        setSorting(sorting=>({...sorting, [sortKey] : sorting[sortKey] === 'asc' ? 'desc' : 'asc'}))
    }

        return (
            <>
            <table className="user-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th className={sorting['first_name'] || 'unsorted'} onClick={e => onSort(e, "first_name")}>First Name</th>
                        <th className={sorting['last_name'] || 'unsorted'} onClick={e => onSort(e, "last_name")}>Last Name</th>
                        <th className={sorting['company_name'] || 'unsorted'} onClick={e => onSort(e, "company_name")}>Company Name</th>
                        <th className={sorting['city'] || 'unsorted'} onClick={e => onSort(e, "city")}>City</th>
                        <th className={sorting['state'] || 'unsorted'} onClick={e => onSort(e, "state")}>State</th>
                        <th className={sorting['zip'] || 'unsorted'} onClick={e => onSort(e, "zip")}>Zip</th>
                        <th className={sorting['email'] || 'unsorted'} onClick={e => onSort(e, "email")}>Email</th>
                        <th className={sorting['web'] || 'unsorted'} onClick={e => onSort(e, "web")}>Web</th>
                        <th className={sorting['id'] || 'unsorted'} onClick={e => onSort(e, "id")}>Id</th>
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
