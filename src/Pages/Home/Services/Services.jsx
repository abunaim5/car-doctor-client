// import { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-one-delta.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])


    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl text-orange-500 font-semibold">Our Services</h2>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don&apos;t look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;