import React from 'react';
import Header from "@/components/Header/Header";
import UserInfo from "@/components/UserInfo/UserInfo";
import './UserHome.scss'

const UserHome = () => {
    return (
        <div className='UserHome-container'>
            <Header/>
            <UserInfo/>
        </div>
    );
};

export default UserHome;