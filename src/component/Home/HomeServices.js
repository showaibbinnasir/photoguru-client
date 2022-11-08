import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../ServiceItem/ServiceItem';

const HomeServices = ({props}) => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-warning'>Our Services</h1>
            <h1><small>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, <br /> or chemically by means of a light-sensitive material such as photographic film.</small></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 mx-12 gap-5'>
                {
                    props.map(item => <ServiceItem key={item.productId} item={item}></ServiceItem>)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <Link to='/services'><button className='btn btn-secondary'>See all</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;