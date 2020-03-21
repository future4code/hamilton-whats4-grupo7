import React from 'react'
import styled from 'styled-components'


const ContainerInputMensagem = styled.div`
  background-color: yellow;
  height:100%;
  width:100%;
`

const DivCaixaMensagem = styled.div`
  background-image:url(https://i.pinimg.com/originals/85/70/f6/8570f6339d3189c96e340d47a581d3b8.jpg);
  height: 400px;
  border: 4px solid black;
`

const Mensagem = styled.div`
  display:flex;
  margin-left: 15px;
`
const MensagemEu = styled.div`
  display:flex;
  margin-left: 15px;
  justify-content: flex-end;
`

const DivDoInput = styled.div`
  height: 100px;
  background-color:#128c7e ;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`

class InputMensagem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      arrayPessoas: [
        {
          nome: "",
          texto: "",
        }
      ],
      valorInputNome: "",
      valorInputTexto: ""
    }
  }

  adicionaMensagem = (event) => {

    if (event.key === "Enter" || event === "botao"){

      const novaMensagem = {
        nome: this.state.valorInputNome, 
        texto: this.state.valorInputTexto
      }

      const auxiliar = [ ...this.state.arrayPessoas, novaMensagem];

      this.setState({ arrayPessoas: auxiliar , valorInputNome: "", valorInputTexto: ""});
    }

  }

  onChangeInputNome = event => { this.setState({ valorInputNome: event.target.value }) };

  onChangeInputTexto = event => { this.setState({ valorInputTexto: event.target.value }) };

  onDoubleClick = (key) => {
    if (window.confirm('Tem certeza que deseja deletar essa mensagem?')) {
    
      const removeMensagemAuxiliar = this.state.arrayPessoas.filter((elemento,index)=>{
      return index!== key})

      this.setState({arrayPessoas: removeMensagemAuxiliar})
    
    }
  }


  inserePost = ( )=>{ 
    
    const inserePost = this.state.arrayPessoas.map((elemento, index) => {
      
      if(elemento.nome!=="" && elemento.texto!==""){
          if(elemento.nome==="Eu"){
            return (
              <MensagemEu key={index} onDoubleClick={()=>this.onDoubleClick(index)}>
                <strong>{elemento.nome}: </strong> {elemento.texto}
              </MensagemEu>)
          }else{
            return (
              <Mensagem key={index} onDoubleClick={()=>this.onDoubleClick(index)}>
                <strong>{elemento.nome}: </strong> {elemento.texto}
              </Mensagem>)
            }
      }
    }); 
   return inserePost;
  }

  render() {

    return (
      <ContainerInputMensagem>

        <DivCaixaMensagem>
          <this.inserePost/>
        </DivCaixaMensagem>

        <DivDoInput>
            <input onKeyDown={this.adicionaMensagem} onChange={this.onChangeInputNome} placeholder={'Nome'} value={this.state.valorInputNome} />
            <input onKeyDown={this.adicionaMensagem} onChange={this.onChangeInputTexto} placeholder={'Texto'} value={this.state.valorInputTexto} />
            <button onClick={()=>this.adicionaMensagem("botao")}>Adicionar</button>
        </DivDoInput>

      </ContainerInputMensagem>
    );
  }
}

export default InputMensagem;