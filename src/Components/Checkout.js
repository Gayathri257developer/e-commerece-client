import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../reducer";
// import CurrencyFormat from "react-currency-format";


const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
 
  const navigate = useNavigate();
  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  console.log("checkout", basket);

  
  return (
    <Container>
      <Navbar />
      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>
          {basket.length === 0 && (
            <h4>
              Your Amazon Basket is empty &nbsp;
              <button onClick={() => navigate("/")}>Continue Shopping</button>
            </h4>
          )}

          {basket?.map((product,index) => (
            <Product key={index}>
              <Image>
                <img src={product.image} alt="product" />
              </Image>
              <Description>
                <h4>{product.title}</h4>

                <p>₹ {product.price}</p>

                <button onClick={(e) => removeFromBasket(e, product.id)}>
                  {" "}
                  Remove
                </button>
              </Description>
            </Product>
          ))}
        </ShoppingCart>

        <Subtotal>

                <p>
                  Subtotal ( {basket.length }items ) : <strong> ₹ {getBasketTotal(basket)} </strong>
                </p>
            
          

          <small>
            <input type="checkbox" />
            <span>This order contains a gift.</span>
          </small>

          {user ? (
            <button onClick={() => navigate("/address")}>
              Proceed to Checkout
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>
              Please login to Checkout
            </button>
          )}
        </Subtotal>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1510px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 1px solid red;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;
  @media only screen and (max-width: 1200px) {
    flex: none;
  }
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 15px;
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;
  img {
    width: 70%;
  }
`;
const Description = styled.div`
  flex: 0.7;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
  }
  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;





const Subtotal = styled.div`
flex: 0.3;
background-color: #fff;
margin-left: 15px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 1200px){
  flex: none;
  margin-top: 20px;
}
p{
  font-size: 20px;
}
small{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
span{
  margin-left: 10px;
}
}
button{
  width: 65%;
  height: 33px;
  margin-top: 20px;
  background-color: #ffd814;
  border; none;
  outline: none;
  border-radius: 8px;
}
`;
export default Checkout;