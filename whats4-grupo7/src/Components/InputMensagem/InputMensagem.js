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

const DivDoInput = styled.div`
    height: 100px;
    background-color:#128c7e ;
    display: flex;
    justify-content:center;
    align-items:center;
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
    const novaMensagem = {
      nome: this.state.valorInputNome, texto: this.state.valorInputTexto
    }

    const auxiliar = [
      ...this.state.arrayPessoas, novaMensagem
    ];

    this.setState({ arrayPessoas: auxiliar });
  }


  adicionaMensagemOnKey = (event) => {

    if (event.key==="Enter"){

    const novaMensagem = {
      nome: this.state.valorInputNome, texto: this.state.valorInputTexto
    }

    const auxiliar = [
      ...this.state.arrayPessoas, novaMensagem
    ];

    this.setState({ arrayPessoas: auxiliar });
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


  render() {
    const inserePost = this.state.arrayPessoas.map((elemento, index) => {
      
        if(elemento.nome!=="" && elemento.texto!==""){
            return (
              <Mensagem key={index} onDoubleClick={()=>this.onDoubleClick(index)}>
                <strong>{elemento.nome}: </strong> {elemento.texto}
              </Mensagem>)
          }
       }
    )

    return (
      <ContainerInputMensagem>

        <DivCaixaMensagem>
          {inserePost}
        </DivCaixaMensagem>

        <DivDoInput>
          <div>
            <input onKeyDown={this.adicionaMensagemOnKey} onChange={this.onChangeInputNome} placeholder={'Nome'} value={this.state.valorInputNome} />
            <input onKeyDown={this.adicionaMensagemOnKey} onChange={this.onChangeInputTexto} placeholder={'Texto'} value={this.state.valorInputTexto} />
            <button onClick={this.adicionaMensagem}>Adicionar</button>
          </div>
        </DivDoInput>

      </ContainerInputMensagem>
    );
  }
}

export default InputMensagem;