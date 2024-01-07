import React from 'react';
import Nav from '../../components/Nav/Nav'
import HeaderAbout from '../../components/HeaderAbout/HeaderAbout';
import Directors from '../../components/Directors/Directors';
import Clients from '../../components/Clients/Clients';

const About = () => {
    return (
        <>
            <Nav />
            <HeaderAbout />
            <Directors />
            <Clients />
        </>
    );
};

export default About;