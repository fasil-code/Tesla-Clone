import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section(props) {

  return (
    <Wrap style={{
      backgroundImage: `url(./images/${props.backgroundImage})`
    }}>
    <Fade top>
      <Itemtext>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Itemtext>
      </Fade>
      
      <Allbuttons className="buttons">
      <Fade bottom>
        <LeftButton>
          Custom Order
        </LeftButton>
        </Fade>
        <Fade bottom>
        <RightButton>
          Existing Inventory
        </RightButton>
        </Fade>
        <div class="arrow">
          <svg xmlns='http://www.w3.org/2000/svg' fill="black" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
        </div>
      </Allbuttons>
     

    </Wrap>


  )
}

export default Section
const Wrap = styled.div`
 width:100vw;
  height:100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
   
  
  padding-top:15vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
 align-items: center;
`
const Itemtext = styled.div`
text-align:center;
h1{
  text-transform:uppercase;

}
`
const Allbuttons = styled.div`
 height:100px;
  width:50%;
 padding-top:20px;
 padding-bottom:8px;
 margin:15px;
 padding:15px;
  font-size:15px;
  align-content: center;

justify-content: center;
display: flex;

`
const LeftButton = styled.div`
  color:white;
  justify-content: center;
  letter-spacing: 1px;

width:200px;
height:40px;
margin:5px;
display:block;
/* margin:7px;*/
padding:10px; 

border-radius:15px;
background-color:rgba(23,26,32,0.8);
opacity:0.6;

cursor: pointer;
text-align:center;
text-transform: uppercase;

`
const RightButton = styled.div`
 color:rgb(39, 34, 34);



justify-content: center;
letter-spacing: 1px;

width:200px;
height:40px;
margin:5px;
display:block;
/* margin:7px;*/
padding:10px; 

border-radius:15px;
background-color:white;
opacity:0.6;

cursor: pointer;
text-align:center;
text-transform: uppercase;
`
