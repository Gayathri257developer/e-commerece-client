import React, { useState } from 'react'
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(query ? `search/?query=${query}` : '`/search'); 
    };

  return (
    <Search onSubmit={submitHandler}>
    <SearchInputs>
    <input type="text" placeholder="search...." 
    name="q" id="q" onChange={(e) => setQuery(e.target.value)}
    aria-label="Search Products"
          aria-describedby="button-search"
    />
    <SearchIcon>
      <BiSearch />
    </SearchIcon>

  </SearchInputs>
 
    </Search>
  )
}

const Search = styled.div`
width: 70%;
`;
const SearchIcon = styled.div`
  background-color: #febd69;
  height: 40px;
  width: 40px;
  font-size: 30px;
  padding: 1px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  @media only screen and (max-width: 767px){
    margin-bottom: 35px;
   }
`;
const SearchInputs = styled.div`
  height: 40px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    font-size: 16px;
    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px){
   display: none;
  }
`;

export default SearchBar