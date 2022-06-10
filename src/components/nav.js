import React ,{useState ,useEffect}from "react";
import Logo from '../images/logo.svg';
import Cart from '../images/icon-cart.svg';
import Menu from '../images/icon-menu.svg';
import Close from '../images/icon-close.svg';
import Trash from '../images/icon-delete.svg';
import Avatar from '../images/image-avatar.png';
import Thumbnail1 from '../images/image-product-1-thumbnail.jpg';
// import './index.css';

const Nav=({cartCount,checkout,setCount,count})=>{
  const [mobnav, setMobnav]=useState('mobnav-none');
    const [cartClass, setCartClass]=useState('cart-none'); 
    const[total, setTotal]=useState(0);
    useEffect(
        ()=>{
          setTotal(cartCount*125)
       
    
        },[cartCount]
        )
       
       

return(
<div>
    <nav>
       <div className="desk">
          <div class="logo"><img src={Logo} alt="logo"/></div>
          <ul>
            <li>
                <a href="collections">Collections</a>
            </li>
            <li>
                <a href="men">Men</a>
            </li>
            <li>
                <a href="women">Women</a>
            </li>
            <li>
                <a href="about">About</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
          </ul>
        <div class="menu">
          <div className="iconCart">
          <span>{count}</span>
            <img src={Cart} alt ="cart" id="iconCart" onClick={()=>{
          cartClass==='cart-none'?
          setCartClass('cart-show'):
          setCartClass('cart-none')
            }}/>
           
            </div>
            <div>
            <img src={Avatar} alt="avatar" id="avatar"/>
            </div>
        </div>
      </div>


      <div class="mobNav">
         <img src={Menu} onClick={()=>{setMobnav('mobnav')}}id="menuicon" alt="" class="menu-icon"/>
          <div class="logo"><img src={Logo} alt="logo"/></div>
                <div class="menu">
                <div className="iconCart">
          <span>{count}</span>
            <img src={Cart} onClick={()=>{
          cartClass==='cart-none'?
          setCartClass('cart-show'):
          setCartClass('cart-none')
          }}alt="" class="carticon"/>
          </div>
                    <img src={Avatar} alt="" class="avatar"/>
                </div>
                <div className={mobnav} id="mobnav">
        <img src={Close} 
        onClick={()=>{setMobnav('mobnav-none')}}
         alt="" id="close" className="close"/>
                    <ul>
                        <li>
                            <a href="#">Collection</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>

                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>


    </nav>
        <hr/>
        <div className={cartClass} id="cartClass">
            {
            cartCount ===0?
      <div class="cartEmpty">
      <h5>Cart</h5>
     <hr/>
      <p>your cart is empty</p>
       </div>
      :
      < div class="cartFull">
      <h5>Cart</h5>
    <hr/>
   <div className="total">
    <img src={Thumbnail1} alt=""/>
    <p>Fall Limitted Edition Sneakers</p>
    <img src={Trash} onClick={()=>{ checkout()}}alt =""/>
    <p><span>$125</span>&#215;<span>{cartCount} </span><span>{total}</span></p>
    </div>
<div  className='checkout'><button onClick={()=>{ checkout()}}>Checkout</button></div>

</div>
}
   </div>

 </div>


    );
}
export default Nav;
