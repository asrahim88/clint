import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: "#3a4256"}}>Your New Smile <br/> Starts Hear</h1>
                <p className="text-secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat obcaecati aliquid recusandae quas incidunt?
                </p>
                <button className="btn-primary">
                    GET APPOINTMENT
                </button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;