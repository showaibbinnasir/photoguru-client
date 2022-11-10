import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../Hook/useTitle';

const AddService = () => {
    const data = useLoaderData()
    useTitle('Photoguru - Add service')
    const handleFormData = (event) => {
        event.preventDefault()
        const form = event.target;
        const productName = form.serviceName.value;
        const img = form.image.value;
        const rating = form.rating.value;
        const productId = form.productId.value;
        const description = form.description.value;
        const details = {productName, img, rating, description, productId}
        
        fetch('http://photoguru-server.vercel.app/allproducts', {
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
          toast.success("service added successfully")
    }
    return (
        <div>
            <form onSubmit={handleFormData}>
                <h1>Service name  : </h1>  
                <input type="text" name='serviceName' className="input input-bordered"/>
                <h1>productId : </h1>  
                <input type="text" disabled name='productId' value={data.length + 1} className="input input-bordered"/>
                <h1>Enter Image Url : </h1>  
                <input type="text" name='image' placeholder="imageUrl" className="input input-bordered" />
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

export default AddService;