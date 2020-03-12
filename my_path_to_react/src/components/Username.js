import React from 'react';

const Username = (props) => {
    const { name } = props;
    return(
        <div className="container">
            <div className='row'>
                 <strong>User name :</strong> {name}
            </div>
        </div>
    );

}


export default Username;