import React from 'react';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;