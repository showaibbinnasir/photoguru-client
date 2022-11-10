import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import 'react-photo-view/dist/react-photo-view.css';

const DetailsProduct = () => {
    const [review, setReview] = useState([])
    const navigate = useNavigate();
    const data = useLoaderData();
    const uri = `http://localhost:5000/reviews?id=${data.productId}`
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [uri])
    console.log(data)
    console.log(review)
    const handleSubmitReviewBtn = id => {
        navigate(`/addreview/${id}`)
    }
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold text-warning'>Service</h1>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{data.productName}</h2>
                        <p>{data.description}</p>
                    </div>
                    <figure><PhotoProvider>
      <div className="foo">
        
          <PhotoView src={data.img}>
            <img src={data.img} alt="" />
          </PhotoView>
        
      </div>
    </PhotoProvider></figure>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-4xl font-semibold text-warning'>Review</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 my-5 gap-5'>
                {
                    review.map(items => <ReviewItems key={items.review_id} item={items}></ReviewItems>)
                }
                </div>
            </div>
            <div>
                <button onClick={()=> handleSubmitReviewBtn(data._id)} className='btn btn-secondary'>Submit your Review</button>
            </div>
            
        </div>
    );
};

export default DetailsProduct;