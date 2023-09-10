import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUsers(data))
    },[])

    const usersStyle={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'10px'
    }
    return (
        <div style={usersStyle}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}