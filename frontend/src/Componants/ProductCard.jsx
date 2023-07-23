import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ _id, primary_image, title, price, description, old_price, category, type }) => {
  return (
    <CardContainer>
      <Image src={primary_image} alt={title} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      {/* <Description>{description}</Description> */}
      {old_price && <OldPrice>Old Price: ${old_price}</OldPrice>}
      <Category>{category}</Category>
      <Type>{type}</Type>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease-in-out;
border: none;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const OldPrice = styled.p`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Category = styled.p`
  font-size: 14px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Type = styled.p`
  font-size: 14px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default ProductCard;
