import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
return (

<div>
  <BrowserRouter>
  <Navbar />

  <Routes>

  <Route path='/' element={<Home/>} />

  </Routes>
  </BrowserRouter>
</div>



)
}

export default App;
