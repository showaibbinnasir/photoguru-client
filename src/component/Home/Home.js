import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Hook/useTitle';
import './Home.css'
import HomeServices from './HomeServices';

const Home = () => {
    const data = useLoaderData();
    useTitle('Photoguru')
    
    return (
        <div>
            <div className='banner flex justify-center items-center mb-5'>
                <div>
                    <h1 className='text-6xl text-white font-semibold mb-3'>Lets Photograph <br /> Beyond The Limit!!!</h1>
                    <div className='flex justify-center items-center gap-5'>
                        <Link to='/about'><button className="btn btn-outline btn-secondary">About us</button></Link>
                        <Link to='/services'><button className="btn btn-active btn-accent">Services</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <HomeServices props={data}></HomeServices>
            </div>
        </div>
    );
};

export default Home;