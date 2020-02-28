import React, { useEffect, useState } from 'react'
import userData from "../data/users.js";
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router'

export default function ContactDetails({}){
    const [details, setDetails] = useState(null)
    const {contactId} = useParams()
    useEffect(()=>{
        const user = userData.find(({id})=>id == contactId)
        setDetails(user)
    },[])
    return(
        <div>
            {details && <div style={{textAlign:'left'}}>
            <h3>{details.first_name+' '+details.last_name}</h3>
            {
                Object.keys(details).map(key=>{
                    return <>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'0 15px'}}>
                        <b>{key}</b>
                        <span>{details[key]}</span>
                    </div>
                    <hr/>
                    </>
                })
            }
            </div>}
        </div>
    )
}