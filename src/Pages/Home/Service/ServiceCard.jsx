//import React from 'react';

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;
    console.log(service)
    return (
        <div className="card card-compact bg-base-100 w-[500px] shadow-xl mt-4">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#444]">{title}!</h2>
                <p className="text-start text-[#FF3811] text-xl">${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`bookings/${_id}`} className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;