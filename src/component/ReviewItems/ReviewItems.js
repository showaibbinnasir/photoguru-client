import React from 'react';

const ReviewItems = ({item}) => {
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-secondary text-primary-content">
                <div className="card-body">
                    <div>
                        <img className='h-24 rounded-full' src={item.userImg} alt="" />
                    </div>
                    <h2 className="card-title">{item.username}</h2>
                    <p>{item.userDes}</p>
                    <p>Rating : {item.rating}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;