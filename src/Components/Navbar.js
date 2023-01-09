import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useStateValue();

  const signout = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/")}>
          <img
            src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
            alt="logo"
          />
        </Logo>

        <SearchBar />

        <RightContainer>
          <NavButton onClick={() => navigate("/login")}>
            {user ? (
              <h5>Welcome,{user.fullName.toUpperCase()}</h5>
            ) : (
              <FaUserAlt />
            )}
          </NavButton>
          <NavButton onClick={user ? () => signout() : () => navigate("/")}>
            {user && <h5>Logout</h5>}
          </NavButton>

          <NavButton onClick={() => navigate("/orders")}>
            {user && <h5>Order</h5>}
          </NavButton>

          <BasketButton onClick={() => navigate("/checkout")}>
            <BsCart4/>
            <p> {basket?.length} </p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="search..." />
        <SearchIcon onClick={() => navigate("/addproduct")}>
          <BiSearch />
        </SearchIcon>
      </MobileSearchbar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const MobileSearchbar = styled.div`
  height: 54px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  input {
    flex: 1;
    margin-bottom: 35px;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const SearchIcon = styled.div`
  background-color: #febd69;
  height: 34px;
  width: 40px;
  font-size: 30px;
  padding: 1px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 35px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  p {
    &:nth-child(1) {
      font-size: 12px;
      margin-bottom: 0px;
    }
    &:nth-child(2) {
      margin-top: 0px;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  color: #fff;
  margin-right: 5px;
  font-size: 20px;
  p {
    color: #fff;
    margin-right: 5px;
  }
`;

export default Navbar;
