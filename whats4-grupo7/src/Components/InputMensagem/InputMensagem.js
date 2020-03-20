import React from 'react'
import styled from 'styled-components'

    const DivDaMensagem = styled.div`
    grid-row:1 / 2;
    

    `
    const DivDoInput = styled.div`
    grid-row:2 / 3;
    background-color:pink;
    display:flex;
    

    `

    const ContainerInputMensagem = styled.div`
    display:flex;



    `
    const DivCaixa = styled.div`
    background-color: blue;
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
       valorInputNome:"",
       valorInputTexto:""
 
 
     }
     }
   
     adicionaMensagem =()=> {
       const novaMensagem = {
         nome: this.state.valorInputNome , texto: this.state.valorInputTexto
 
       }
       const auxiliar =[
         ...this.state.arrayPessoas, novaMensagem
       ];
 
       this.setState({ arrayPessoas: auxiliar}); 
       
     }
         
     onChangeInputNome = event => { this.setState({ valorInputNome: event.target.value})}; 
     
     onChangeInputTexto = event => { this.setState({ valorInputTexto: event.target.value})};
    

    render() {

        const inserePost = this.state.arrayPessoas.map((elemento, index) => {
          return (
            

            <DivCaixa>

            <DivDaMensagem>
            <h3 >{elemento.nome}</h3>
            <p>{elemento.texto}</p>
            </DivDaMensagem>

            </DivCaixa>             
           
          )
        })
        return (
  
            
          <ContainerInputMensagem>
              
            {inserePost}


            <DivDoInput>

             <button onClick={this.adicionaMensagem}>Adicionar</button>

               <input onChange={this.onChangeInputNome} placeholder={'Nome'} value={this.state.valorInputNome}  />
             <input onChange={this.onChangeInputTexto} placeholder={'Texto'} value={this.state.valorInputTexto}  />
  
             </DivDoInput>
      </ContainerInputMensagem>
        );
    }
    }
    
    
    export default InputMensagem 