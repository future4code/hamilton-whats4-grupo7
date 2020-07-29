import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


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
  margin-right: 15px;
  justify-content: flex-end;
`


class Display extends React.Component{

    insereMensagem = () =>{ 
        const auxiliar = this.props.mensagensParaRenderizar.map((elemento, index) => {
            if(elemento.nome !=="" && elemento.texto !==""){
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
        })
        return auxiliar;
    }

    onDoubleClick = (index) =>{
        this.props.removeMensagem(index)
    }


    render(){
        return(
            <DivCaixaMensagem>
                {this.insereMensagem()}
            </DivCaixaMensagem>   
        )
    }

}

export default Display;

Display.propTypes = {
    mensagensParaRenderizar: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    removeMensagem: PropTypes.func.isRequired
}