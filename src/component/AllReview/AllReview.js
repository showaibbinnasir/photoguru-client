import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewItem from '../AllReviewItem/AllReviewItem';
import useTitle from '../Hook/useTitle';

const AllReview = () => {
    useTitle('Photoguru - All review')
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://photoguru-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12'>
                {
                    review.map(item => <AllReviewItem key={item._id} item={item} review={review} setReview={setReview}></AllReviewItem>)
                }
            </div>
        </div>
    );
};

export default AllReview;