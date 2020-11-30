import React, {Component} from 'react';
import Producto from './Producto'


class Home extends Component{
    perfiles;
    constructor (props){
        super (props)
        this.state = {
            error:null,
            isLoaded:false,
            perfiles: []
        }

    }


    render(){
            return(
                    <div className="App">
                        <ul>
                            {this.props.productos.map(producto=><Producto id={producto.id} data={producto.data()}/>)}
                        </ul>
                    </div>
            );
        }
    }


export default Home;