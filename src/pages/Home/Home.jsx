import React from 'react';
import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Reviews from '../../components/Reviews/Reviews';
import CallToAction from '../../components/CallToAction/CallToAction';


const Home = () => {
    
    return (
        <>
        <Nav />
        <Header />
        <Main />
        <Reviews />
        <CallToAction />
        </>
    );
};

export default Home;