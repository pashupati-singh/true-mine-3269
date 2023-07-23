import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Sidebar() {
  // using this hook because we have to send those values in the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // so that while refreshing, data will not change as we gave checked in input change
  let initialCategory = searchParams.getAll('category');
  let initialOrder = searchParams.get('order');
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || '');

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  

  useEffect(() => {
    // so by this, we control our URL and set it into searchParams
    let params = {
      category,

    };
    // it is condition that if order is present then only add order to params
    order && (params.order = order);

    setSearchParams(params);
  }, [category, order]);

  return (
    <DIV>
   
     <span>Sort by:</span> <Dropdown onChange={handleOrder} value={order}>
        <option value=""><span style={{ color: "green" }}>Featured</span></option>
       
        <option value="asc">Low-to-High</option>
        <option value="desc">High-to-Low</option>
   
      </Dropdown>
    </DIV>
  );
}

const DIV = styled.div`
  /* Add any additional styles here */
  margin-top: 5%;
  border: 1px solid gray;
padding:3px;
margin-right: 6px;
`;

const Dropdown = styled.select`
  /* Add dropdown styles here */
border: none;
  
`;
