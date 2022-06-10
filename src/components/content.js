import React from "react";
import Minus from '../images/icon-minus.svg';
import Plus  from '../images/icon-plus.svg';
import Previous from '../images/icon-previous.svg';
import Next  from '../images/icon-next.svg';
import Cart  from '../images/icon-cart.svg';
import Product1  from '../images/image-product-1.jpg';
import Product2  from '../images/image-product-2.jpg';
import Product3  from '../images/image-product-3.jpg';
import Product4  from '../images/image-product-4.jpg';
import Thumbnail1  from '../images/image-product-1-thumbnail.jpg';
import Thumbnail2  from '../images/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import Thumbnail4  from '../images/image-product-4-thumbnail.jpg';
import { useState } from "react";


const Content=({count,setCount})=>{

  const [Product, setProduct]=useState(Product1);
  // const [overlay, setOverlay]=useState('overlay-none');
  const [image, setImage]=useState(Product);
  const [imagecount, setImagecount]=useState(0)
  
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    count>0 ?setCount(count - 1):setCount(count);
  };
let images=[Product1,Product2,Product3,Product4]
function nextImage(){
  if(imagecount<3){
    setImagecount(imagecount+1);
    setImage(images[imagecount])
  }
  else
    {
      setImagecount(0);
      setImage(images[imagecount])
    }
  
}
function prevImage(){
  if(imagecount>0){
    setImagecount(imagecount-1);
    setImage(images[imagecount])
  }
  else
    {
      setImagecount(3);
      setImage(images[imagecount])
    }
  
}
 return(
        <div className="content">
    <div className= "left">
      <div className="one">
    <img className='mainImage' src={image} alt=""></img>
    <div className="arrows">
      <img src={Previous} alt="" 
      onClick={prevImage} 
      style={{cursor:"pointer"}} 
      className="prev"/>
      <img src={Next} alt="" 
      onClick={nextImage} 
      style={{cursor:"pointer"}} 
       className="next"/>
  </div>
  </div>
  <div className="two" >
  <ul className="two" id='over-thumbs'>
          <li>
            <img onClick={()=>{setProduct(Product1);setImage(Product)}} src={Thumbnail1} alt=""></img>
          </li>

          <li>
            <img onClick={()=>{setProduct(Product2);setImage(Product)}} src={Thumbnail2} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product3);setImage(Product)}} src={Thumbnail3} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product4);setImage(Product)}} src={Thumbnail4} alt=""></img>
          </li>

        </ul>
        </div>
  </div>
     <div class="right ">
                <h5>SNEAKER COMPANY</h5>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div class="discount ">
                    <h2>$125.00</h2>
                    <button id="button1">50%</button>
                </div>
                <div class="cartbuttons ">
                    <button id="button2" >
                         <img src={Minus} alt="minus" onClick={decrementCount} />{count}
                        <img src={Plus} alt="plus" onClick={incrementCount}/>                
                        </button>
                    <button id="button3" onClick={incrementCount}>
                        <img src={Cart} alt="cart" />Add to cart
                        </button>
                </div>
    </div>

        </div>
    );
}
export default Content;