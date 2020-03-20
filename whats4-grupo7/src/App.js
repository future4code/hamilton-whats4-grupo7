import React from 'react';
import './App.css';

  class App extends React.Component {
   constructor(props) {
    super(props);

    this.state = {

      arrayPessoas: [
        {
          nome: "João",
          texto: "joao@f4.com",

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
      
    //  console.log('Ola')
    }
        
      

   

    onChangeInputNome = event => { this.setState({ valorInputNome: event.target.value})}; 
    
    onChangeInputTexto = event => { this.setState({ valorInputTexto: event.target.value})};
    
 


    render() {
      const inserePost = this.state.arrayPessoas.map((elemento, index) => {
        return (
          
          <div>
          <h3 >{elemento.nome}</h3>
          <p>{elemento.texto}</p>
          </div>
           
         
        )
      })
      return (


        <div className="App">

          {inserePost}
   <button onClick={this.adicionaMensagem}>Adicionar</button>
        <input onChange={this.onChangeInputNome} placeholder={'Nome'} value={this.state.valorInputNome}  />
        <input onChange={this.onChangeInputTexto} placeholder={'Texto'} value={this.state.valorInputTexto}  />

        </div>
    
      );
    }
  }
  
  

    export default App;
