import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({item}) => {
    const navigate = useNavigate();
    const navigation = (id) =>{
        navigate(`/products/${id}`)
    }
    return (
        <div className='flex justify-center'>
           <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={item.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.productName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>navigation(item._id)} className='btn btn-warning'>Explore</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceItem;