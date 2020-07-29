import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const DivDoInput = styled.div`
  height: 100px;
  background-color: #128c7e ;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`

class InputMensagem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valorInputNome: "",
      valorInputTexto: ""
    }
  }


  onChangeInputNome = event => { this.setState({ valorInputNome: event.target.value }) };

  onChangeInputTexto = event => { this.setState({ valorInputTexto: event.target.value }) };

  adicionaMensagemInput = (event) => {

    if (event.key === "Enter" || event === "botao"){
      if(this.state.valorInputNome !=="" && this.state.valorInputTexto !==""){
        const novaMensagem = {
          nome: this.state.valorInputNome, 
          texto: this.state.valorInputTexto
        }

        this.props.mensagem(novaMensagem);

        this.setState({valorInputNome: "", valorInputTexto: ""});
      }
    }

  }

  render() {
    return (
        <DivDoInput>
            <input onKeyDown={this.adicionaMensagemInput} onChange={this.onChangeInputNome} placeholder={'Nome'} value={this.state.valorInputNome} />
            <input onKeyDown={this.adicionaMensagemInput} onChange={this.onChangeInputTexto} placeholder={'Texto'} value={this.state.valorInputTexto} />
            <button onClick={()=>this.adicionaMensagemInput("botao")}>Adicionar</button>
        </DivDoInput>
    );
  }
}

export default InputMensagem;

InputMensagem.propTypes = {
  mensagem: PropTypes.func.isRequired
};