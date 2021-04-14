import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/teeth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className='services-container'>
            <div className='text-center'>
                <h5 style={{ color: '#5fc7c7' }}>Our Services</h5>
                <h2 style={{ color: '#203047' }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service ={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;