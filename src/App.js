import './style/index.scss';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path='/a-propos' element={ <About /> }/>
        <Route path='/logement' element={ <Accommodation /> }/>
        <Route path='/logement/:id' element={ <Accommodation /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </>
  );
}

export default App;
