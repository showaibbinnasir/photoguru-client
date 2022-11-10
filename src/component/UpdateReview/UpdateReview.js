import React from 'react';
import useTitle from '../Hook/useTitle';

const UpdateReview = () => {
    useTitle('Photoguru - Update Review')
    const handleFormData = event => {
        alert('clicked')
    }
    return (
        <div>
            <form onSubmit={handleFormData}>
                <h1>Service name  : </h1>  
                <input type="text" name='serviceName' className="input input-bordered" disabled/>
                
                <h1>Enter User name : </h1>  
                <input type="text" name='username' className="input input-bordered" disabled/>
                <h1>Enter Image Url : </h1>  
                <input type="text" name='image' placeholder="imageUrl" className="input input-bordered" />
                <h1>Review id : </h1>  
                <input type="text" name='reviewId' className="input input-bordered" disabled/>
                <h1>Service id : </h1>  
                <input type="text" name='productId' className="input input-bordered" disabled/>
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

export default UpdateReview;