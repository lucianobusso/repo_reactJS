import React, { useState, useEffect } from 'react';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Home from './paginas/Home';
import Menu from './paginas/Menu';
import { BrowserRouter, Route} from "react-router-dom";
import ProductoDetalle from './paginas/ProductoDetalle';
import firebase from './config/firebase';

function App() {
  const [estado, setEstado]=useState({
    opcionesMenu:[{name:'Inicio', path:'/'}, {name:'Login', path:'/login/'}, {name:'Registro', path:'/registro/'}],
    productos:[]
  })
  useEffect(
    ()=>{
      firebase.db.collection('productos')
      .get()
      .then(querySnapshot=>{
        setEstado({...estado, productos:querySnapshot.docs})
      })
  }, []); 


  return (
      <BrowserRouter>
        <Menu data={estado.opcionesMenu}/>
        <Route path="/" exact  component={()=><Home productos={estado.productos} />} />
        <Route path="/login" exact  component={Login} />
        <Route path="/registro" exact  component={Registro} />
        <Route path='/producto/detalle/:id' exact component={ProductoDetalle}/>
      </BrowserRouter>
  );
}

export default App;
