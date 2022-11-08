import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsProduct = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={data.img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">{data.productName}</h1>
                    <p className="py-6">{data.description}</p>
                    <p className="py-6">Rating : {data.rating} Stars</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;