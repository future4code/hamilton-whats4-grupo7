import React from 'react';
import './App.css';
import InputMensagem from './Components/InputMensagem/InputMensagem'
import styled from 'styled-components'

//ESTILOS DA PAGINA//

const Container = styled.div`
   
    width:100vw;
    height:400px;
    background-color:pink;
      
    
    `
  class App extends React.Component {
   constructor(props) {
    super(props);

     this.state = {

   
    }
  }

    render() {
      
      return (


        <Container>
  
          <InputMensagem></InputMensagem>
  
        </Container>
    
      );
    }
  }
  
  

    export default App;
