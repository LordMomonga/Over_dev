
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Header from './pages/entete';
import Login from './pages/Login';
import IndexPage from './IndexPage';
import Layout from './Layout';
import Register from './pages/Register';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      </Route>
    </Routes>
    
  )
}

export default App
