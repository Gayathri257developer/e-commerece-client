import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";

const Iphone = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("https://e-commerece-project.onrender.com/api/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);


  return (
    
   <>
   <Navbar/>
  
   <Main>
  

   {products &&
     products?.data.filter(item => item.category === "iPhone").map((product,index) => (
       <Card key={index}
         id={product._id}
         image={product.imageURL}
         price={product.price}
         rating={product.rating}
         title={product.title}
         className="d-block w-300"
       />
     ))}
 </Main>
   </>
  )
}
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  transition: linear 1s;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: 100px;
    padding: 10px 0px;
  }
`;
export default Iphone