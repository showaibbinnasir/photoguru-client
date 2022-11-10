import React from 'react';

const AllReviewItem = ({item, review, setReview}) => {
    const handleDeleteButton = (item) => {
        const agree = window.confirm(`are you sure to delete ${item.username}?`)
        if(agree){
            fetch(`http://localhost:5000/review/${item._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remainingUsers = review.filter(usr => usr._id !== item._id);
                    setReview(remainingUsers);
                }
            })
        }
    }
    return (
        <div className='bg-secondary rounded-lg shadow-md p-5'>
            <div className='flex justify-center'>
                <img className='h-24 rounded-full' src={item.userImg} alt="" />
            </div>
            <h1 className='text-2xl font-semibold'>{item.username}</h1>
            <h1>{item.rating}</h1>
            <h1>{item.userDes}</h1>
            <div className='mt-5'>
                <button onClick={()=>handleDeleteButton(item)} className='btn btn-danger'>Delete</button>
            </div>
            
        </div>
    );
};

export default AllReviewItem;