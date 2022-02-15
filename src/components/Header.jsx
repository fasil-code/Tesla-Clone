import React,{ useState } from "react";
import styled from "styled-components"
function Header(props){
    const[burgerStatus,setBurgerStatus]=useState(false);
    return (
        <Container>
   <a>
     <img src="./images/logo.svg"></img>  
   </a>
   <Menu>
   
<p><a href="#">Model-1</a></p>
<p><a href="#">Model-3</a></p>
<p><a href="#">Model-K</a></p>
<p><a href="#">Model-m</a></p>
   </Menu>
<Rmenu>
<a href="#">Shop</a>
<a href="#">Tesla  account</a>
<p onClick={()=>setBurgerStatus(true)}><img src="./images/icon.png" ></img></p>
</Rmenu>
<Bmenu show={burgerStatus}>
<Wrapper><close  onClick={()=>setBurgerStatus(false)} ><img src="./images/x.png"></img></close></Wrapper>

   <li><a href="#">Existing Inventory</a></li> 
   <li><a href="#">Used Inventory</a></li> 
   <li><a href="#">Trade-In</a></li> 
   <li><a href="#">Roadster</a></li> 
   <li><a href="#">Eco-Power</a></li> 
   <li><a href="#">Solar Roof</a></li> 
   <li><a href="#">Charging</a></li> 
   <li><a href="#">Utilities</a></li> 
   <li><a href="#">Commercial Energy</a></li> 
   <li><a href="#">Tester</a></li> 
</Bmenu>
        </Container>
    );
}
export default Header;
const Container=styled.div`
min-height:60px;
position:fixed;
padding:0px 10px;
display:flex;
align-items:center;
justify-content:space-between;
left:0;
top:0;
right:0;
z-index:6;

`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
letter-spacing:1px;
flex:1;
p{
    font-weight:600;
    text-transform:uppercase;
    padding:0 15px;
}
@media (max-width:800px){
    display:none;
}
`
const Rmenu=styled.div`
display:flex;
align-items:center;
letter-spacing:1px;

a{
font-weight:600;
    text-transform:uppercase;
  margin-right:10px;
}
p{
 cursor:pointer;
    font-weight:600;
    margin-left:5px;
}
`
const Bmenu=styled.div`
position:fixed;
top:0;
text-transform:uppercase;
z-index:10;
bottom:0;
right:0;
background-color:white;
width:250px;
list-style:none;
padding:20px;
text-align:start;
transform:${props=>props.show ?'translateX(0)':'translateX(100%)'};
transition:transform 0.2s ;
li{
padding:15px 0px;
border-bottom:1px solid rgba(0,0,0,0.2);
a{
    font-weight:400;
}
}
`
const close=styled.div`
cursor:pointer;
img{
   
}
`
const Wrapper=styled.div`
display:flex;
justify-content:right;
font-weight:100;
cursor:pointer

`