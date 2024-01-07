import React from 'react';
import Nav from '../../components/Nav/Nav'
import HeaderAbout from '../../components/HeaderAbout/HeaderAbout';
import Directors from '../../components/Directors/Directors';
import Clients from '../../components/Clients/Clients';
import CallToAction from '../../components/CallToAction/CallToAction';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <Nav />
            <HeaderAbout />
            <Directors />
            <Clients />
            <CallToAction />
        <Footer />
        </>
    );
};

export default About;