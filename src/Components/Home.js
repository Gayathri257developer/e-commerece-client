import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/api/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);

  const [cats, setCats] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/api/category/get");
      setCats(data);
    };
    fetchdata();
  }, []);

  return (
    <>
    <Navbar/>
    <Container>
     
      <New>
        <Nav>
          <Left>
            {cats &&
              cats?.data.slice(0, 8).map((c,index) => (
                <Link to={`/category/${c.name}`} className="link-list" key={index}>
                  <p>{c.name}</p>
                </Link>
              ))}
          </Left>
        </Nav>
      </New>

      <Banner />
      <h1 style={{textAlign: "center"}}>Top Products</h1>
      <Main>
     
        {products &&
          products?.data.filter(item => item.rating > 3).slice(0,8).map((product,index) => (
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

      <Footer />
    </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
`;

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

const New = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  text-align: center;
  background-color: #232f3e;
  position: relative;
  top: 0px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  p {
    color: #fff;
    font-weight: 500;
  }
  .link-list {
    text-decoration: none;
    font-size: 16px;
  }
`;

export default Home;