import React from 'react';

const Username = (props) => {
    const { name } = props;
    return (
        <div className="">
            <div className=''>
                <strong>User name :</strong> {name}
            </div>
        </div>
    );

}


export default Username;