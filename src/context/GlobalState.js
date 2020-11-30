import React, {Component} from 'react';
import NetContext from './NetContext';

class GlobalState extends Component{
    state={
        login: localStorage.getItem('login'),
        dataUser: localStorage.getItem('dataUser'),
        newLogin:false,
    }
    loginUser=dataUser=>{
        this.setState({
            login:true,
            dataUser:dataUser,
            newLogin:true
        });
        localStorage.setItem('login', this.state.login)
    };
    logout = ()=>{
        this.setState({
            login:false,
            dataUser: null,
            newLogin:false,
        })
        localStorage.removeItem('login')
        window.location.href='/'
    }
    setNewLogin=(status)=>{
        this.setState({
            newLogin:status
        })
    }
    render(){
        return(
            <NetContext.Provider
                value={{
                    login:this.state.login,
                    loginUser:this.loginUser,
                    logout:this.logout,
                    newLogin:this.state.newLogin,
                }}
            >
                {this.props.children}
            </NetContext.Provider>
        );
    }
}

export default GlobalState;