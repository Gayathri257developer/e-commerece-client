import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import Address from './Components/Address';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Signup from './Components/Signup';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styled from 'styled-components';
import Orders from './Components/Orders';
import NotFoundPage from './Components/NotFoundPage';
import Success from './Components/Success';
import Iphone from './Components/Iphone';
import Ipad from './Components/Ipad';
import Laptop from './Components/Laptop';
import Macbook from './Components/Macbook';
import Airphone from './Components/Airphone';
import Media from './Components/Media';
import Keyboard from './Components/Keyboard';
import Headphones from './Components/Headphones';

const promise = loadStripe(
  "pk_test_51MHt1ASFBIyqZbMVubG9U6cCgy5todkprlXzX4PyRqrkV1BOjpp5H6S9rYplYLCIDxEu9K81U2a4MRTUqNVbez8S00l5KWQN3q"
);
const App = () => {

  return (
    <BrowserRouter>
   
   <Container>
   <Routes>
   <Route path='/' element={<Home/>} />

   <Route path='/category/iphone' element={<Iphone/>} />
   <Route path='/category/ipad' element={<Ipad/>} />
   <Route path='/category/laptop' element={<Laptop/>} />
   <Route path='/category/macbook' element={<Macbook/>} />
   <Route path='/category/camera & video' element={<Media/>} />
   <Route path='/category/mice & keyboard' element={<Keyboard/>} />
   <Route path='/category/boAt Airdopes' element={<Airphone/>} />
   <Route path='/category/headphones' element={<Headphones/>} />
   
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />
   <Route path='/checkout' element={<Checkout/>} />
   <Route path='/address' element={<Address/>} />
   <Route path='/payment' element={<Elements stripe={promise}> <Payment /> </Elements>} />
   <Route path='/addproduct' element={<AddProduct/>} />
   <Route path='/orders' element={<Orders/>} />
   <Route path="/success" element={<Success/>} />
   <Route path='*' element={<NotFoundPage/>} />
   </Routes>
   </Container>
  

    </BrowserRouter>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default App