import React from 'react';
import { useSelector } from 'react-redux';
import NavBarComponent from './NavBarComponent';

const Home = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <div className="container">
            <NavBarComponent/>
            <h1>Home Page</h1>
            {isAuthenticated ? (
                <h2>Welcome, {user.name}!</h2>
            ) : (
                <h2>Please log in or sign up.</h2>
            )}
        </div>
    );
};

export default Home;
