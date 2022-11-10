import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewItem from '../AllReviewItem/AllReviewItem';

const AllReview = () => {
    
    const data = useLoaderData()
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12'>
                {
                    data.map(item => <AllReviewItem key={item._id} item={item}></AllReviewItem>)
                }
            </div>
        </div>
    );
};

export default AllReview;