import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const data = useLoaderData();
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold text-warning mt-5'>Our Services</h1>
            <h1><small>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, <br /> or chemically by means of a light-sensitive material such as photographic film.</small></h1>
            <div className='grid grid-cols-3 mx-12 gap-5 mt-5'>
                {
                    data.map(item => <ServiceItem key={item.productId} item={item}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;