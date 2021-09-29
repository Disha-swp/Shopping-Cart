import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import  Cloth  from './Item/cloth';  // Cloth should be capital
//components
import  Drawer  from '@material-ui/core/Drawer';
import  LinearProgress  from '@material-ui/core/LinearProgress';
import  Grid  from '@material-ui/core/Grid';
import  AddShoppingCart  from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//styles
import { Nav, Navbar,Container } from 'react-bootstrap';
import { Wrapper } from './App.styles';
import './App.css';

export type CartItemType = {
  id: number;
  title : string;
  price : number;
  description : string;
  category : string;
  image : string;
  amount : number;
}
const getProducts = async(): Promise<CartItemType[]> =>
  await(await fetch('https://fakestoreapi.com/products')).json();


function App() {
  const { data, isLoading,error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  const getTotal = () => null;
  const handleAddtoCart =(clickeditem: CartItemType) => null;
  const handleRemovefromCart =()=> null;
  if(isLoading) return <LinearProgress/>;
  if(error) return <div>Error!</div>

  
  return (
    <Wrapper>
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Toggle />
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        
    </div>
    <Grid container spacing={3}>
      {data?.map(item =>(
        <Grid item key ={item.id} xs ={12} sm={4} >
        <Cloth item = {item} handleAddtoCart={handleAddtoCart}/>
        </Grid>
      ))}
    </Grid>
      
    </Wrapper>
  );
}


export default App;
