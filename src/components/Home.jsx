import React from 'react'
import styled from "styled-components"
import Section from "./Section.jsx"
import Footer from "./footer.jsx"
function Home() {
    return (
        <Container>
       
        <Section 
            title="Model-S"
            description="Order online free delivery"
           backgroundImage="model-s.jpg"

        /> 
        <Section
          title="Model-X"
            description="Order online paid delivery"
           backgroundImage="model-x.jpg"
         /> 
        <Section
        
        title="Model-Y"
            description="Order online paid delivery"
           backgroundImage="model-y.jpg"
         /> 
        <Section
        
        title="Solar Power Panel"
            description="Eco friendly and high quality"
           backgroundImage="solar-panel.jpg"
         /> 
         <Section
        
          title="Solar Power Roof"
            description="Eco friendly and high quality"
           backgroundImage="solar-roof.jpg"
         /> 
 <Section
        
        title="Accessories"
            
           backgroundImage="accessories.jpg"


         /> 
<Footer />
        </Container>
    )
}

export default Home
const Container =styled.div`
  height:100vh;
 
`
