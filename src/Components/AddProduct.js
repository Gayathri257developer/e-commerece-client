import axios from '../axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const addproduct = (e) =>{
        e.preventDefault();

    axios.post("/products/add", {title, imageURL, price, rating, category})
    .then(() => {
        setTitle("");
        setImageURL("");
        setCategory("");
        setPrice(0);
        setRating(0);
    })
    .catch((error) => alert(error.message));
    };

    const [cats, setCats] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
        const data = await axios.get('/api/category/get');
        setCats(data);
        };
        fetchdata();
      },[])

      
  return ( 
    <Container>
    <Logo>
        <img
          src="https://www.bing.com/images/search?q=Amazon+Logo+Clip+Art&FORM=IRTRRL"
          alt="logo"
        />
      </Logo>
      <FormContainer>
      <h3>Add Product</h3>

      <InputContainer>
        <p>Title</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)}
          value={title}/>
      </InputContainer>

      <InputContainer>
        <p>ImageURL</p>
        <input type="text" onChange={(e) => setImageURL(e.target.value)}
          value={imageURL}/>
      </InputContainer>

      <InputContainer>
        <p>Category</p>
        <select onChange={(e) => setCategory(e.target.value)} value={category} >
        <option>Select</option>
    {
     
      cats && cats?.data.map((c) => (
        <option>{c.name}</option>
          
      ))
    
  }
  </select>
  </InputContainer>     

 <InputContainer>
        <p>Price</p>
        <input type="number" onChange={(e) => setPrice(e.target.value)}
         placeholder="0.00" value={price}/>
      </InputContainer>

      <InputContainer>
        <p>Rating</p>
        <input type="number" onChange={(e) => setRating(e.target.value)}
        placeholder='1-5'  value={rating}/>
      </InputContainer>

      <Button onClick={addproduct}>Add Product</Button>
      </FormContainer>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
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
img{
    width: 100%;
}
`;
const FormContainer = styled.div`
border: 1px solid lightgrey;
width: 55%;
heoght: fit-content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
h3{
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
p{
    font-size: 14px;
    font-weight: 600;
}
input,select{
    width: 95%;
    border-radius: 5px;
    height: 33px;
    border: 1px solid grey;
    padding-left: 5px ;
    margin-top: 5px;
    &:hover{
        border: 1px solid orange;
    }
}
`;
const Button = styled.div`
width: 70%;
height: 35px;
line-height: 2;
text-align: center;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top: 30px;
`;



export default AddProduct;