import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var name = {
  //   first:"Bipresh",
  //   second:"Roy"
  // }
  // var address = {
  //   country : "Bangladesh",
  //   city : "Sylhet",
  //   word : "Sylhet - 7",
  //   house : "29/7(2nd Floor)"
  // }
  var style = {
    color:'cyan',
    backgroundColor:'gray'
  }
  const country = ['Bangladesh','India','Pakistan','Nepal','Bhutan']
  const capital = ['Dhaka','New Delhi','Islamabad','Kathmundu','Thimphu']
  
  const products = [
    {name :'Photoshop',price :'$90.99'},
    {name :'Illustrator',price:'$60.99'},
    {name :'PDF Reader',price:'$6.99'},
    {name :'Premier EI',price :'$290.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>My Heading : <span style = {{color : 'cyan'}}>Bangladesh</span> </h1>
        <p style = {style}>My First React Paragraph</p>
        {/* <h4>My Name : {name.first + " " + name.second}</h4>
        <h5>My Address : {address.house + " " + address.word + " " + address.city + " " + address.country}</h5> */}
        {/* ...................................................................... */}
        <ul>{
          country.map(countryName =><li style={{textAlign:'left'}}>{countryName}</li> )
        }
        </ul>
        <ul>{
          products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* ....................................................................... */}
        <Country name= "Bangladesh" capital ="Dhaka"></Country>
        <Country name = "Australia" capital ="Canbera"></Country>
        <Country name = "USA" capital ="Washington"></Country>
        <Country  name = "UK" capital ="London"></Country>
        <Country  name = {country[0]} capital = {capital[0]}></Country>
        <Country  name = {country[1]} capital = {capital[1]}></Country>
        <Country  name = {country[2]} capital = {capital[2]}></Country>
        <Country  name = {country[3]} capital = {capital[3]}></Country>
        {/*............................................................*/}

        <Product name = {products[0].name} price = {products[0].price}></Product>
        <Product name ={products[1].name} price ={products[1].price}></Product>
        <Product name ={products[2].name} price ={products[2].price}></Product>
        <Product name ={products[3].name} price ={products[3].price}></Product>
        {/* ................................................................ */}
        {
          // products.map(pd => <Product product = {pd}></Product>) এইটা কাজ করেনাই;
        }
        
        <Counter></Counter>
        <Counter1></Counter1>
        {/* <Counter2></Counter2> */}
        <Users></Users>
      </header>
    </div>
  );

  function Country(props){
    return (
      <div style = {{border:'2px solid orange',margin:'10px',padding:'20px',backgroundColor:"gray"}}>
        <h3 style = {{color:"cyan"}}>Country Name : {props.name}</h3>
        <p>Capital City : {props.capital}</p>
      </div>
    )
  }
  //.........................................................................
 
  function Product(props){
    const productStyle = {
      border :'2px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightGray',
      padding :'20px',
      margin:'20px',
      width:'200px',
      height:'200px',
      float:'left'
    }
    return (
      <div style = {productStyle}>
        <h3>{props.name}</h3>
        <h1>{props.price}</h1>
        <button>Buy now</button>
      </div>
    )
  }
  // ...........................................................
  // function Counter2(){
  //   const [count2,setCount2] = useState(0);
  //   return (
  //     <div>
  //       <h1>Count : {count2} </h1>
  //       <button onClick={setCount2(count2 + 1)}>Increase2</button>
  //     </div>
  //   )
  // }
  function Counter1(){
    const [count,setCount] = useState(20);
    const handleIncrease = () =>setCount(count +1);
    return (
      <div>
      <h1>Count : {count} </h1>
      <button onClick={handleIncrease}>Increase1</button>
      
    </div>
    )
  }
  function Counter(){
    const [count,setCount] = useState(10);
    const handleIncrease = () => {
      const newCount = count +1;
      setCount(newCount);
    };
    const handleIncrease1 = () =>setCount(count +1);
    const handleDecrease = () =>setCount(count -1);
    return (
      <div>
        <h1>Count : {count} </h1>
        <button onClick={handleIncrease}>Increase</button> 
        <button onClick={handleIncrease1}>Increase1</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    )
  }
  //.............................................................
  function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(data => setUsers(data))
      
    },[])
    return (
      <div>
        <h3>Dynamic Users :{users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

}

export default App;
