import React from 'react'
import { styled } from 'styled-components'
import { Avatar} from '@chakra-ui/react'

export default function Navbar({ RouteName, Path }) {
    return (
        <Div>
            <div className='routeName'>
                <p>{Path}</p>
                <h3>{RouteName}</h3>
            </div>
            <div className='profileSection'>
                 <Avatar size='sm' bg='purple.500' />
            </div>
        </Div>
    )
}

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.routeName{
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border-radius: 10px;
}
.routeName>p{
   font-size:15px;
   color:gray;
   text-align: start;
}
.routeName>h3{
   font-size:25px;
   font-weight:bold;
}
.profileSection{
   height:45px;
   background-color:white;
   display: flex;
   align-items: center;
   padding: 0px 5px 0px 70px;
   border-radius: 50px;
}

@media screen and (max-width:500px){
    .routeName>h3{
        font-size:20px;
        font-weight:bold;
        text-align: start;
     } 
     .profileSection{
        height:45px; 
        padding: 5px;
     }
}

`