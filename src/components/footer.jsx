import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Foot>
        <li>Tesla @ {new Date().getFullYear()}</li>  
        <li>Privacy & Legal</li>  
        <li>Careers</li>  
        <li>Forums</li>  
        </Foot>
    )
}

export default Footer;
const Foot=styled.div`
 position: relative;
 bottom:0;
 left:0;
 right:0;
display:flex;
justify-content:center;
list-style-type:none;
height:40px;
background-color:rgb(220, 220, 220);
li{
    margin-top:10px;
    padding:0 15px;
    
}
@media(max-width:768px){
    

font-size:12px;
flex-direction:column;
height:100px;
align-items:center;
padding:5px 5px;
}
`