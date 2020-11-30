import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import {Button, Form, Col, Container} from 'react-bootstrap';
import firebase from '../config/firebase';

const Registro =(props)=>{
    const history = useHistory();
    const [usuario, setUsuario]=useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
    });
    const handleLogin = (e)=>{
        let email = usuario.email;
        let password = usuario.password;
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log('Usuario Creado', data.user.uid)
            firebase.db.collection('usuarios').add({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                userId: data.user.uid
            })
            .then((data)=>{
                history.push('/login');
            })
            .catch((err)=>{
            })
        })
        .catch((error)=>{
            console.log('Error', error)
        })
        e.preventDefault();
    }
    let handleForm=(event, field='')=>{
        setUsuario({...usuario, [event.target.name]: event.target.value});
        event.preventDefault();
    }
    return(
        <div className="App">
            <Container>
                <br/>
                <Form>
                <Form.Row>
                    <Form.Group xl={6} sm={12} as={Col} controlId="formGridNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name='nombre' value={usuario.nombre} onChange={(event)=>handleForm(event)}/>
                    </Form.Group>

                    <Form.Group xl={6} sm={12} as={Col} controlId="formGridApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder='Ingrese su apellido' name='apellido' value={usuario.apellido} onChange={(event)=>handleForm(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" name='email' value={usuario.email} onChange={(event)=>handleForm(event)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" name='password' value={usuario.password} onChange={(event)=>handleForm(event)}/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={(event)=>handleLogin(event, 'valor')}>Crear Cuenta</Button>
                </Form>
            </Container>
        </div>
    )
}
export default Registro;
