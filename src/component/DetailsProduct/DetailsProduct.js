import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';

const DetailsProduct = () => {
    const [review, setReview] = useState([])
    
    const data = useLoaderData();
    const uri = `http://localhost:5000/reviews?id=${data.productId}`
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [uri])
    console.log(data)
    console.log(review)
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold text-warning'>Service</h1>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{data.productName}</h2>
                        <p>{data.description}</p>
                    </div>
                    <figure><img src={data.img} alt="Shoes" /></figure>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-4xl font-semibold text-warning'>Review</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 my-5 gap-5'>
                {
                    review.map(items => <ReviewItems key={items.reviewId} item={items}></ReviewItems>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default DetailsProduct;