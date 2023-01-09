import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [err, setErr] = useState(false);
 const [error, setError] = useState(false);
  const [{},dispatch] = useStateValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setErr(false);
    axios
      .post("/api/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

        navigate('/');
        } else if (!password || !email){
           setError(true)
        }
        else {
          setErr(true)
          console.log(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img
          src="https://www.bing.com/images/search?q=Amazon+Logo+Clip+Art&FORM=IRTRRL"
          alt="logo"
        />
      </Logo>
      <FormContainer>
        <h3>Sign-In</h3>
       { err && <p style={{color: "red"}}>Wrong Creaditional</p>}
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
          />
          { error && <p style={{color: "red"}}>Fill the email field</p>}
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}

            value={password}
          />
          { error&& <p style={{color: "red"}}>Fill the password field</p>}
        </InputContainer>

        <LoginButton onClick={login}>Login</LoginButton>

        <InfoText>
          By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </InfoText>
      </FormContainer>
      <SignUpButton onClick={() => navigate("/signup")}>
        Create Account in Amazon
      </SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const FormContainer = styled.form`
  border: 1px solid lightgrey;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    border: 1px solid lightgrey;
    margin-top: 0px;
    padding-left: 5px;
    border-radius: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;
const LoginButton = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  outline: none;
  background-color: #f3b414;
  border-radius: 10px;
  margin-top: 26px;
`;
const InfoText = styled.button`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;
  border: none;
  background-color: #fff;
  span {
    color: #426bc0;
  }
`;
const SignUpButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

export default Login;