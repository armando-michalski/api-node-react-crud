import './App.css';
import ListaCards from './components/ListaCards';
import ListaUsers from './components/ListaUsers';
import Opcoes from './components/Opcoes'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function Home(){
  return(
    <div>
    <Opcoes></Opcoes>
    <ListaCards></ListaCards>
    </div>
  )
}

function Users(){
  return(
    <div>
    
    <ListaUsers></ListaUsers>
    </div>

  )
}
function App() {
  return (

   
    <div className="App-div">
      
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/users" element={<Users />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
