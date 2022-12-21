
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Articles from './components/articles/Articles';


function App() {
return (

<div>
  <BrowserRouter>
  <Navbar />

  <Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/articles' element={<Articles/>} />

  </Routes>
  </BrowserRouter>
</div>



)
}

export default App;
