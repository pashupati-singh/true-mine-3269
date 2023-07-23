import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Sidebar() {
  // using this hook because we have to send that values it the url
  const [searchParams, setSearchParams]=useSearchParams()


  // so that while refreshing data will not changed as we gived checked in input change
  let initialCategoray=searchParams.getAll("category")
 
  let initialOrder=searchParams.get("order")
const [category, setCategory]=useState(initialCategoray || [])


const [order, setOrder]=useState(initialOrder || "")
// this sorting should come in searchparam so pass it in params obj

// console.log(category)

const handleCategory=(e)=>{
const {value}=e.target;
let newCategory=[...category]
if(newCategory.includes(value)){
  newCategory=newCategory.filter((el)=>el !== value)
}else{
  newCategory.push(value)
}
setCategory(newCategory)

}


// function of sorting input
const handleorder=(e)=>{
const {value}=e.target;
setOrder(value)
}

useEffect(()=>{
  // so by this we control our url and set into searchparams
  let params={

    category,
    // now order will also come here 
    // order
  }
  // it is codition that if order is present then only add order to params
  order && (params.order=order)

  setSearchParams(params)
},[category,order])
  return (
    <DIV>
<h3>Sort by Price</h3>
<div className='sorting' onChange={handleorder}>
  <div>
     <input type="radio" name='order' value={"asc"}  defaultChecked={order=="asc"}/>
  <label>Low-to-High</label>
  </div>
  {/* giving commen name to both of this so that only one can be select either asc or descending according to user choice */}
 <div>
   <input type="radio" name='order' value={"desc"} defaultChecked={order=="desc"}/>
  <label>High-to-Low</label>
 </div>
 
</div>

    </DIV>
  )
}


const DIV=styled.div`
  
 
`