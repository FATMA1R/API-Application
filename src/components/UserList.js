import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios';


const UserList = () => {
    const [User,setUser]=useState([]);  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> { setUser(response.data); 
            console.log(response);   }) }, [])

    return (

        <div className="listt">
            {User.map(user=>
              <ul key={user.id} className="card">
                
                    <li className="name">{user.name}</li>

                    <hr id="line" />
                    
                    <div className="infos">
                    <li><i className=""></i><span>User Name:</span> {user.username}</li>
                    <li><i className=""></i><span>Email:</span> {user.email}</li>
                    <li><i className=""></i><span>Phone:</span> {user.phone}</li>
                    <li><i className=""></i><span>Company Name:</span> {user.company.name}</li>
                    </div>         
              </ul>  )
            }
        </div>
    )
}

export default UserList
