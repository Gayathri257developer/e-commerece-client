import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";

const Address = () => {
    const [{}, dispatch] = useStateValue();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [flat, setFlat] = useState("");
    const [area, setArea] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState(false);
   


  const navigate = useNavigate();

  const deliver = (e) =>{
    setError(false);
   e.preventDefault();

   dispatch({
    type: "SET_ADDRESS",
    item: {
        fullName,
        phone,
        flat,
        area,
        city,
        state,
    },
   });
   if(!fullName || !phone || !city || !state || !area || !landmark || !flat){
    setError(true);
  }else{
   navigate("/payment");
  }
}
  return (
    <Container>
      <Navbar />

      <Main>
        <FormContainer >
          <InputContainer>
            <p>Full Name<span style={{color: "red"}}>*</span></p>
            <input  type="text" placeholder="john smith" value={fullName} 
           
            onChange={(e) => setFullName(e.target.value)} />
            { error && <span style={{color: "red"}}>enter full name</span>}
          </InputContainer>

          <InputContainer>
            <p>Phone Number<span style={{color: "red"}}>*</span></p>
            <input type="text" placeholder="+91" value={phone}  maxLength="10"
             onChange={(e) => setPhone(e.target.value)} required="true"/>
             { error && <span style={{color: "red"}}>enter phone</span>}
             </InputContainer>

          <InputContainer>
            <p>Flat, House no. Building, Company<span style={{color: "red"}}>*</span></p>
            <input type="text" value={flat} maxLength="3"
            onChange={(e) => setFlat(e.target.value)} required/>
            { error && <span style={{color: "red"}}>enter flatno</span>}
          </InputContainer>

          <InputContainer>
            <p>Area, colony, Street<span style={{color: "red"}}>*</span></p>
            <input type="text" value={area} 
            onChange={(e) => setArea(e.target.value)} required/>
            { error && <span style={{color: "red"}}>enter area</span>}
          </InputContainer>

          <InputContainer>
            <p>Landmark<span style={{color: "red"}}>*</span></p>
            <input type="text" value={landmark} 
            onChange={(e) => setLandmark(e.target.value)} required/>
            { error && <span style={{color: "red"}}>enter landmark</span>}
          </InputContainer>

          <InputContainer>
            <p>Town/City<span style={{color: "red"}}>*</span></p>
            <input type="text" value={city} 
            onChange={(e) => setCity(e.target.value)} required/>
            { error && <span style={{color: "red"}}>enter city</span>}
           
          </InputContainer>

          <InputContainer>
            <p>State<span style={{color: "red"}}>*</span></p>
            <input type="text" value={state} 
            onChange={(e) => setState(e.target.value)} required/>
            { error && <span style={{color: "red"}}>enter state</span>}
          </InputContainer>
       
          <button onClick={deliver}>Deliver to this Address</button> 
        
        </FormContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;
const Main = styled.div`
  padding: 15px;
`;
const FormContainer = styled.div`
  border: 1px solid lightgrey;
  width: 55%;
  height: fit-content;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 15px;
  background-color: #fff;
  button {
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #ffa32a;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input,select {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;

export default Address;