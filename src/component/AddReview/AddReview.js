import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const AddReview = () => {
    const {user} = useContext(authContext)
    useTitle('Photoguru - Add review')
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://photoguru-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    const data = useLoaderData()
    const reviewLength = review.length;
    console.log(reviewLength)
    const handleFormData = (event) => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value;
        const username = form.username.value;
        const userImg = form.image.value;
        const review_id = form.reviewId.value;
        const productId = form.productId.value;
        const rating = form.rating.value;
        const userDes = form.description.value;
        const details = {serviceName, username, userImg, review_id, productId, rating, userDes}
        console.log(details);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(details) 
          })
          .then(res=> res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
          form.reset()
          toast.success("Review added successfully")

    }
    return (
        <div>
              <form onSubmit={handleFormData}>
                <h1>Service name  : </h1>  
                <input type="text" name='serviceName' defaultValue={data.productName} className="input input-bordered" disabled/>
                
                <h1>Enter User name : </h1>  
                <input type="text" name='username' defaultValue={user.displayName} className="input input-bordered" disabled/>
                <h1>Enter Image Url : </h1>  
                <input type="text" name='image' placeholder="imageUrl" className="input input-bordered" />
                <h1>Review id : </h1>  
                <input type="text" name='reviewId' value={reviewLength+1} className="input input-bordered" disabled/>
                <h1>Service id : </h1>  
                <input type="text" name='productId' value={data.productId} className="input input-bordered" disabled/>
                <h1>Enter your rating : </h1>  
                <input type="text" name='rating' placeholder="Rate out of 5" className="input input-bordered" required />
                <h1>Description : </h1>  
                <textarea className="textarea textarea-secondary w-60" placeholder="Description" name='description' required></textarea>
                <br />
                <input type="submit" className='btn btn-secondary' />
              </form>
              
            
        </div>
    );
};

export default AddReview;