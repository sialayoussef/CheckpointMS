import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './Components/ListUsers';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListUser' element={<PrivateRoute auth={auth}><ListUser/></PrivateRoute>}/>
        <Route path='/Profil/:id' element={<PrivateRoute auth={auth}><Profil/></PrivateRoute>}/>
      </Routes>






      
    </div>
  );
}

export default App;
