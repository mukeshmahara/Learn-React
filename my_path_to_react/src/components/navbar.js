import React from 'react';

const Navbar = (props) => {
    return (
       <h1>Hello, {props.name}</h1>
    );

}

Navbar.defaultProps = {
    name: 'Muki'
}

export default Navbar;
