
import React from 'react'


const Product = ({id, name, description, img, price }) => {
  return (

    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id} >
       <div className="tc">
         <img src={img} class="br-100 h4 w4 dib ba b--black-05 pa2" title={name} />
    <h1 className="f3 mb2">Mimi W.</h1>
    <h2 className="f5 fw4 gray mt0">Free Shipping</h2>
    <button className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink bn">Add</button>
    <span>$ {price} </span>
  </div>
</article>
  );
 };

 export default Product;