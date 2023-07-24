import React, { useEffect, useRef, useState } from 'react'
import Navbar from './otherComponent/navbar'
import styled from 'styled-components'
import { LineChart } from './otherComponent/LineChart'
import { PieChart } from './otherComponent/PieChart'
import { BarChart } from './otherComponent/BarChart'
import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'


export default function Dashboard() {

  const [Todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[])
  const TodoTitle = useRef('')

  function AddTodos() {
    if (TodoTitle.current === '') {
      alert('Please Enter a Title')
    } else {
      setTodos([...Todos, { title: TodoTitle.current, status: false }])
      localStorage.setItem('todos', JSON.stringify([...Todos, { title: TodoTitle.current, status: false }]))
    }
  }

  function UpdateTodos(title) {
    let newData = Todos.map((todo) => todo.title === title ? { "title": todo.title, "status": !todo.status } : todo)
    localStorage.setItem('todos',JSON.stringify(newData))
    setTodos(newData)
  }

  return (
    <div>
      <Navbar Path={'Pages / Dashboard'} RouteName={'Main Dashboard'} />
      <Div className='admin_dashboard_Div'>
        <div className='chart_Div'>
          <div className='lineChart_Div'>
            <LineChart />
          </div>
          <div className='smallChats'>
            <div className='pollChat'><PieChart /></div>
            <div className='pieChat'><BarChart /></div>
          </div>
        </div>

        <div className='stats_Div'>
          <div className='adminStats'>
            <Stat bg='white' borderRadius='10px' textAlign={'center'}>
              <StatLabel>Profit</StatLabel>
              <StatNumber fontSize={'15px'}>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat bg='white' borderRadius='10px' display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <StatLabel fontSize={'25px'}>Stock</StatLabel>
              <StatNumber></StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                3.36%
              </StatHelpText>
            </Stat>
          </div>

          <div className='AddTodo'>
            <input type="text" onChange={(e) => TodoTitle.current=e.target.value} />
            <button onClick={() => AddTodos()}>ADD Todo</button>
          </div>

          <div className='AdminTodoList'>
            <div>
              {Todos.length === 0 ? <p style={{color:'gray'}}>No New Todo Added</p> :
                Todos?.map((todo) => <div className='todosItem'>
                  <input type="checkbox" checked={todo.status} onChange={() => UpdateTodos(todo.title)} />
                  <span>{todo.title}</span>
                </div>)
              }
            </div>
          </div>
        </div>
      </Div>
    </div>
  )
}

const Div = styled.div`
display: grid;
grid-template-columns: 60% 38%;
justify-content: space-between;

.lineChart_Div{
  border-radius:10px;
  overflow: hidden;
  margin-bottom:15px;
}
.smallChats{
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
}
.smallChats>div{
  border-radius:10px;
  overflow: hidden;
  height:220px;
}
.pieChat{
  padding:5px;
  background-color: white;
}
.adminStats{
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-around;
}
.AdminTodoList{
  background-color: white;
  border-radius:10px;
  height:350px;
  margin:auto;
  width:95%;
  margin-top:20px;
  overflow-y:scroll;
  padding:10px;
}

.AddTodo{
  margin: 10px 0px;
  display: flex;
  width: 95%;
  margin:auto;
  margin-top:20px;
  flex-direction: column;
}
.AddTodo>button{
   width:100%;
   background-color: purple;
   color:white;
}
.AddTodo>input{
   padding-left:15px;
   border:2px solid purple;
}
.todosItem{
  display:grid;
  grid-template-columns: 10% 80%;
  justify-content: space-around;
  text-align: start;
  align-items:center;
  margin-top:5px;
}
.todosItem>input{
   height:15px;
}

@media screen and (max-width: 1250px){
  display: grid;
  grid-template-columns: 61% 38%;

}
@media screen and (max-width: 700px){
 display:flex;
 flex-direction: column;
 gap:20px;

}
@media screen and (max-width: 500px){
  .smallChats{
    display:flex;
    flex-direction: column;
    gap:20px;
  }
}

`