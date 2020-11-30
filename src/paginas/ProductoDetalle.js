//FUNCION PRODUCTO DETALLADO
import React, {useState, useEffect} from 'react';
import ProductoLista from './ProductoLista';
import firebase from '../config/firebase';

const ProductoDetalle =(props)=>{
    const [producto, setProducto]=useState({})
    useEffect(
        ()=>{
            firebase.db.doc('productos/'+props.match.params.id)
            .get()
            .then(doc=>{
                setProducto(doc.data())
            });
        }, []);
    return(
        <>
            {
                producto&&
                <div className="App">
                    <ProductoLista data={producto}/>
                </div>
            }
        </>
    )
}

export default ProductoDetalle;