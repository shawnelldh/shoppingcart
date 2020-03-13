import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Product from "./components/Product";

const products = [


{
 id: 1,
 name:"Shirt1",
 description: "",
 img:"//cdn.shopify.com/s/files/1/0312/6537/products/1306583-400_F_1024x1024.jpg?v=1571273264",
 price: 100 

},



{
 id: 2,
 name:"Shirt2",
 description: "",
 img:"//cdn.shopify.com/s/files/1/0312/6537/products/1290140_Red_Graphite_Graphite-F_1024x1024.jpg?v=1571269329",
 price: 100 

},




{
 id: 3,
 name:"Shirt3",
 description: "",
 img:"//cdn.shopify.com/s/files/1/0312/6537/products/OG101_roguegrey_1200x1200_e2cae931-7583-42bb-8bc4-655ef550b490_1024x1024.gif?v=1571273220",
 price: 100 

},









]



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <main className="flex flex-wrap">
       {
         products.map(p => <Product key={p.id} {...p}  />)
       }   
        
          
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
