// PRODUCTO DEL HOME
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import firebase from '../config/firebase';



class Producto extends Component{
    constructor (props){
        super (props)
        console.log(firebase.database());
    }
    render (){
        return (
            <div className="App">
                <br/>
                <div><h3>{this.props.data.name}</h3></div>
                <div><label>{this.props.data.description}</label></div>
                <div><label>Precio: $ {this.props.data.price}.</label></div>
                <div><label>Codigo SKU: {this.props.data.sku}</label></div>
                <div><Link to={'/producto/detalle/'+this.props.id}><Button variant="info" type="submit">Mostrar Detalles</Button></Link></div>
            </div>
        )
    }
}

export default Producto;