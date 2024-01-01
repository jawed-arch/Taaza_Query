import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
import Login from './User/Login';
import Register from './User/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/general' element={<FetchData cat="general"/>}/>
          <Route path='/business' element={<FetchData cat="business"/>}/>
          <Route path='/entertainment' element={<FetchData cat="entertainment"/>}/>
          <Route path='/health' element={<FetchData cat="health"/>}/>
          <Route path='/science' element={<FetchData cat="science"/>}/>
          <Route path='/sports' element={<FetchData cat="sports"/>}/>
          <Route path='/technology' element={<FetchData cat="technology"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
