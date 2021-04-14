import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
                <img style={{height: '50px'}} src={service.img} alt=""/>
                <h4 className="mt-3 mb-3">{service.name}</h4>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, perspiciatis!</p>
        </div>
    );
};

export default ServiceDetails;