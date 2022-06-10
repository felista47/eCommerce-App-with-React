import React,{useState} from 'react';
import Nav from './components/nav';
import Content from './components/content';
import './index.css';

function App() {
  const [count, setCount]=useState(0)

 
  function checkout(){
    setCount(0)
  }
 
  
  return (
    <div className='container'>

       <Nav cartCount={count} checkout={checkout} setCount={setCount}count={count}/>
       <Content count={count} setCount={setCount}/>
     
     </div>
  );
}

export default App;
