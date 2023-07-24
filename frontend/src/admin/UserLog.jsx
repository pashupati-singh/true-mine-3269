import React from 'react'
import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'
import { Button } from '@chakra-ui/react'

export default function UserLog() {

let data=[
  {
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "status": true
  },
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@gmail.com",
    "status": true
  },
  {
    "name": "Michael Smith",
    "email": "michael.smith@gmail.com",
    "status": true
  },
  {
    "name": "Emily Brown",
    "email": "emily.brown@gmail.com",
    "status": true
  },
  {
    "name": "William Lee",
    "email": "william.lee@gmail.com",
    "status": true
  },
  {
    "name": "Sophia Kim",
    "email": "sophia.kim@gmail.com",
    "status": true
  },
  {
    "name": "Daniel Wang",
    "email": "daniel.wang@gmail.com",
    "status": true
  },
  {
    "name": "Olivia Chen",
    "email": "olivia.chen@gmail.com",
    "status": true
  },
  {
    "name": "James Nguyen",
    "email": "james.nguyen@gmail.com",
    "status": true
  },
  {
    "name": "Emma Gupta",
    "email": "emma.gupta@gmail.com",
    "status": true
  },
  {
    "name": "Benjamin Patel",
    "email": "benjamin.patel@gmail.com",
    "status": false
  },
  {
    "name": "Ava Wilson",
    "email": "ava.wilson@gmail.com",
    "status": true
  },
  {
    "name": "Lucas Martinez",
    "email": "lucas.martinez@gmail.com",
    "status": true
  },
  {
    "name": "Isabella Lopez",
    "email": "isabella.lopez@gmail.com",
    "status": true
  },
  {
    "name": "Mia Thompson",
    "email": "mia.thompson@gmail.com",
    "status": true
  },
  {
    "name": "Alexander Kim",
    "email": "alexander.kim@gmail.com",
    "status": true
  },
  {
    "name": "Abigail Gupta",
    "email": "abigail.gupta@gmail.com",
    "status": true
  },
  {
    "name": "Ethan Chen",
    "email": "ethan.chen@gmail.com",
    "status": true
  },
  {
    "name": "Charlotte Wang",
    "email": "charlotte.wang@gmail.com",
    "status": true
  },
  {
    "name": "Harper Nguyen",
    "email": "harper.nguyen@gmail.com",
    "status": false
  },
  {
    "name": "admin",
    "email": "admin@gmail.com",
    "status": "admin"
  }
]

  return (
    <div>
      <Navbar Path={'Pages / UsersLog'} RouteName={'User Logs'} />
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
            {data?.reverse().map((data) => <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                {
                  data.status==="admin"?<Button colorScheme='messenger'>Admin</Button>:data.status===true?<Button colorScheme='whatsapp'>login</Button>:<Button colorScheme='red'>Logout</Button>
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

@media screen and (max-width:700px){
  height:610px;
}

`