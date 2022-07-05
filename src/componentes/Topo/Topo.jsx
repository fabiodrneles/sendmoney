import React, {Component} from 'react'
import './topo.css';
import Logo from './LogoApp.png'

class Topo extends Component {
    render(){
        return(
            <>
            <div className='header'>
                <div className='container'>
                    <div className='logo'><img src={Logo} alt="algumacoisa"/></div>
                    <h1>Envie pagamentos para outras contas</h1>
                </div>
            </div>
            </>
        );
    }
}

export default Topo;