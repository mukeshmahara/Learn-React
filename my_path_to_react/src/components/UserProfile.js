import React from 'react';
import mukeshPro from '../assets/images/mukeshPro.JPG';

import Avatar from './Avatar';
import Username from './Username';
import Bio from './Bio';

import '../components/userProfile.css';

const UserProfile = (props) => {
    return (
        <div className="userprofile" >
            <Avatar source={mukeshPro}/>
            <Username name="Mukesh Mahara"/>
            <Bio bio="My name is mukesh mahara. I am pro"/>
        </div>
    );
}

export default UserProfile;