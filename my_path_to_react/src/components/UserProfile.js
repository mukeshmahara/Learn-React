import React from 'react';
import mukeshPro from '../assets/images/mukeshPro.JPG';

import Avatar from './Avatar';
import Username from './Username';
import Bio from './Bio';

import '../components/userProfile.css';

const UserProfile = (props) => {
    return (
        <div className=" my-4">

            <div className="    " >
                <Avatar source={mukeshPro} className="" />
                <Username name="Mukesh Mahara" className="" />
                <Bio bio="My name is mukesh mahara. I am pro" />
            </div>
        </div>
    );
}

export default UserProfile;