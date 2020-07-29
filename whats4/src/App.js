import React from 'react'
import styled from 'styled-components'
import InputMensagem from './Components/InputMensagem/InputMensagem'
import Display from './Components/Display/Display'


const Container = styled.div`
  width:50vw;
  height:400px;
  background-color:pink;
  margin:0 auto;  
  `

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {   
      arrayMensagens: [
        {
          nome: "",
          texto: "",
        }],
    }
  }

  adicionaMensagem = (novaMensagem) => {
    const auxiliar = [ ...this.state.arrayMensagens, novaMensagem];

    this.setState({ arrayMensagens: auxiliar});
  }

  onDoubleClick = (key) => {
    if (window.confirm('Tem certeza que deseja apagar esta mensagem?')) {
    
      const removeMensagemAuxiliar = this.state.arrayMensagens.filter((elemento,index)=>{
      return index!== key})

      this.setState({arrayMensagens: removeMensagemAuxiliar})
    
    }
  }

  render() {
    return (
      <Container>
        <Display mensagensParaRenderizar={this.state.arrayMensagens} removeMensagem={this.onDoubleClick}/>
  
        <InputMensagem mensagem={this.adicionaMensagem} />
      </Container>
      );
    }
}
  
export default App;

//enchanting-lock.surge.sh