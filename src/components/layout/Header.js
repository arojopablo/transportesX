import React from 'react';
const logo =  'images/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className ="holder">
                <div className='logo'>
                    <img src={logo} width="100px"
                    alt = "Transportes X" />
                    <h1>Transportes X</h1>                    
                </div>
            </div>
        </header>
    );   
}
export default Header;
