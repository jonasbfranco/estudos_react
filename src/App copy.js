import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const name = "Jonas"
  const newName = name.toUpperCase()

  function sum (a,b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"

  //props
  const nomee = "Kemily"

  //Array
  const meusItens = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()


  return (
    <div className="App">
      <h1>ALterando o JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2) }</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
      <hr/>
      <SayMyName name="Jonas"/>
      <SayMyName name="Pedro"/>
      <SayMyName name={nomee}/>
      <hr/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Engenheiro"
        foto="https://via.placeholder.com/150" 
      />
      <hr/>
      <List />
      <Evento />
      <Evento />
      <Form />
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <br />
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
