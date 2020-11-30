import React, {useState} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import firebase from '../config/firebase';

const Login = (props)=>{
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });
    let handleLogin = (event, valor) => {
        firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((data)=>{
            console.log('data', data)
        })
        .catch(error=>{
            console.log('error', error)
        })
        event.stopPropagation();
        event.preventDefault();
    }
    let handleForm = (event)=>{
        setUsuario({...usuario, [event.target.name]: event.target.value});
        event.preventDefault();
    }
    return(
        <div className="App">
            <br/>
            <Container>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicUsuario">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" name='email' value={usuario.email} onChange={(event)=>handleForm(event)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" name='password' value={usuario.password} onChange={(event)=>handleForm(event)}/>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Iniciar Sesion
                        </Button>
                    </Form>
            </Container>
        </div>
    );
}
export default Login