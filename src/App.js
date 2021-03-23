import './App.css';
import Produtos from './Produtos';
import Title from './Title';
import Total from './Total';


function App() {
  return (
    <div className="App">
      <Title title={"SEU CARRINHO"}/>
      <Produtos/>
      <Total/>
    </div>
  );
}

export default App;
