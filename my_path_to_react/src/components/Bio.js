import React from 'react';

const Bio = (props) => {
    const { bio } = props;
    return (
        <div className="">
            <div className="">
                <strong>Bio:</strong>
                {bio}
            </div>
        </div>
    );

}
export default Bio;