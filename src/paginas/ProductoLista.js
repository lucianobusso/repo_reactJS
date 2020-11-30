//PRODUCTO DETALLADO
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


class ProductoLista extends Component{
    constructor (props){
        super (props)

    }
    render (){
        return (
                <div className="App">
                    <ul>
                        <br/>
                        <div><h3>Nombre: {this.props.data.name}</h3></div>
                        <br/>
                        <div><label>Descripcion: {this.props.data.description}</label></div>
                        <br/>
                        <div><label>Precio: $ {this.props.data.price}.</label></div>
                        <br/>
                        <div><label>Codigo SKU: {this.props.data.sku}</label></div>
                        <br/>
                        
                        <Link to={'/'}><Button variant="info" type="submit" >Comprar</Button></Link>
                    </ul>
                </div>
        )
    }
}

export default ProductoLista;