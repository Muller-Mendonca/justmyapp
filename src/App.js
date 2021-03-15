import './App.css';
import Produtos from './Produtos';
import Title from './Title';


function App() {
  return (
    <div className="App">
      <Title title={"SEU CARRINHO"}/>
     <Produtos nome={"CAPITÃO AMÉRICA"} valor={'R$' + 87.99}/>
     <Produtos nome={"HOMEM ARANHA"} valor={'R$' + 99.99}/>
    </div>
  );
}

export default App;
