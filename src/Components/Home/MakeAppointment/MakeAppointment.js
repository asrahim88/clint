import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className = "text-primary text-uppercase">Appointment</h5>
                        <h1 className = "my-4">Make an Appointment Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid, earum quos delectus distinctio itaque.</p>
                        <button className="btn-primary">learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;