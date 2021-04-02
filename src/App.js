import './App.css';
import Produtos from './Produtos';
import Title from './Title';
import Total from './Total';
import {GlobalStorage} from './GlobalContext'


function App() {
  return (
    <GlobalStorage>
      <div className="App">
       <Title title={"SEU CARRINHO"}/>
       <Produtos/>
       <Total/>
      </div>
    </GlobalStorage>
    
  );
}

export default App;
