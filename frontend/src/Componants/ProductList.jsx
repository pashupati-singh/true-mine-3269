import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";
import { useSearchParams, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { inf } from "react-infinite-scroll-component";

export default function ProductList() {
  const [page, setPage] = useState(1);
  const limit = 24;
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  const location = useLocation();

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
      if (document.documentElement.scrollTop === 0) {
        if (page > 1) {
          setPage((prev) => prev - 1);
        } else {
          setPage(1);
        } // Reset the page to 1 when user reaches the top
      }
    } catch (error) {
      console.log(error);
    }
  };

  let paramObj = {
    params: {
      category: searchParams.getAll("category"),
      type: searchParams.getAll("type"),
      sortbyprice: searchParams.get("order"),
      pageno: page,
      pagelimit: limit,
    },
  };

  // console.log(searchParams.getAll("category"), searchParams.getAll("type"));

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <BOX>
      <SIDEBAR>
        <Sidebar />
      </SIDEBAR>

      <inf
        dataLength={products.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        <DIV>
          {products.length > 0 &&
            products.map((product) => {
              return <ProductCard key={product._id} {...product} />;
            })}
        </DIV>
      </inf>
    </BOX>
  );
}

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 300px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SIDEBAR = styled.div`
  display: flex;
  justify-content: end;
`;

const BOX = styled.div`
  width: 80%;
  margin: auto;
`;
