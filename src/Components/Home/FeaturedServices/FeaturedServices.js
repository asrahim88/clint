import React from 'react';
import featured from '../../../images/featured.png';
import './FeaturedServices.css';


const FeaturedServices = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className = "img-fluid image" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, On Your Terms</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore dolorem facere. Repudiandae, fugiat laboriosam et maxime dolorum optio assumenda perferendis numquam officiis, distinctio itaque quae unde quam. Voluptatem, laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore dolorem facere. Repudiandae, fugiat laboriosam et maxime dolorum optio assumenda perferendis numquam officiis, distinctio itaque quae unde quam. Voluptatem, laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore dolorem facere. Repudiandae, fugiat laboriosam et maxime dolorum optio assumenda perferendis numquam officiis, distinctio itaque quae unde quam. Voluptatem, laboriosam?</p>
                        <button className="btn-primary">learn more</button> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;