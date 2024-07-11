// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //console.log(services)
    return (
        <div className="text-center space-y-10">
            <div className="space-y-3">
                <h4 className="text-[#FF3811] text-xl font-bold" >Service</h4>
                <h2 className="text-[#151515] text-[45px] font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {
                    services?.map(service => (
                        <div key={service._id} className="flex flex-col items-center justify-center">
                            <ServiceCard service={service}></ServiceCard>
                        </div>
                    ))
                }
            </div>

            <button className="text-[#FF3811] border border-[#FF3811] px-[22px] py-[15px] rounded-lg font-semibold">More Services</button>
        </div>
    );
};

export default Service;