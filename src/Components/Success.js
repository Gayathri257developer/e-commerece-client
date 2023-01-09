import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Success = () => {
  const navigate = useNavigate();
  return (
    <Container>
 <Status>
 <h1>Payment Successfull</h1>
 </Status>
 <Button onClick={() => navigate('/')}>
 <p>GoTo Home</p>
 </Button>
    </Container>
  )
}

 const Container = styled.div`
 width: 50%;
 height: 200px;
 background-color: #fff;
 display: flex;
 flex-direction: column;
 align-item: center;
 justify-content: center;
 
 position: relative;
 top: 30%;
 left: 30%;
 border-radius: 30px;
 box-shadow: 5px 5px 10px #d3d3d3;
 `;
 const Status = styled.div`
//  background-color: #a42;
 width: 100%;
 height: 30%;
 text-align: center;
 padding: 10px;
 
 `;
 const Button = styled.div`
 font-size: 2rem;
 text-align: center;
 background-color: #258;
 max-width: 40%;
 border-radius: 5px;
 margin: 20px 40%;
 display: flex;
 color: white;
 justify-content: center;
 align-items: center;
  transition: all 0.5s ease-out;
 &:hover{
  transform: scale(0.9);
  border-radius: 20px;
 }
 `;

export default Success