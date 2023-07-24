import React, { useEffect, useState } from 'react'
import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
export default function Users() {

  let [user, setUsers] = useState([])

console.log(user)

  function updateSatus(name){
    let newuser=user.map((user)=>user.name===name?{...user,status:!user.status}:user)
    setUsers(newuser)
  }

  useEffect(()=>{
      axios.get('https://studybuddy-backend-t2yy.onrender.com/users/allUser')
      .then((res)=>{
        let newData=res.data.map((data)=>({...data,"status":true}))
        setUsers(newData)}
        );
  },[])


  return (
    <div>
      <Navbar Path={'Pages / Users'} RouteName={'User Preview'} />
      <Div>
        <table className='usertable'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {user?.map((data) => <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                {data.status?
                  <Button colorScheme='red' onClick={()=>updateSatus(data.name)}>Block</Button>:
                  <Button colorScheme='messenger' onClick={()=>updateSatus(data.name)}>Blocked</Button>
                }
              </td>
            </tr>)}
          </tbody>
        </table>

      </Div>
    </div>
  )
}

const Div = styled.div`
width: 100%;
height: 540px;
border-radius:10px;
background-color: white;
overflow-y: scroll;
padding:10px;

.usertable{
  width: 100%;
}
.usertable>thead{
  font-weight:700;
}
.usertable>thead>tr>td:nth-child(2){
  text-align: center;
}
.usertable>tbody>tr>td:nth-child(2){
  text-align: center;
}
.usertable>tbody>tr:hover{
  color:purple;
  cursor: pointer;
}
.usertable>tbody>tr>td:nth-child(3){
  text-align: end;
}


@media screen and (max-width:700px){
  height:610px;
}

@media screen and (max-width:500px){
  .usertable>tbody>tr{
    display:flex;
    flex-direction:column;
  }
  .usertable>thead{
    display:none;
  }
  .usertable>tbody>tr>td:nth-child(2){
    text-align: start;
  }
  .usertable>tbody>tr>td:nth-child(3){
    text-align: start;
  }
  .usertable>tbody>tr>td:nth-child(3)>button{
   margin-bottom:10px;
  }
}

`