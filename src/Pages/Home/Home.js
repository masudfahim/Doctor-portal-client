import React from 'react';
import Footer from '../Shared/Footer';
import Bannar from './Bannar';
import Care from './Care';
import Contact from './Contact';

import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>


        </div>
    );
};

export default Home;