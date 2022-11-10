import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllReviewItem = ({item, review, setReview}) => {
    const navigate = useNavigate();
    const handleUpdateBtn = (service) =>{
        navigate(`/reviewupdate/${service._id}`)
    }
    const handleDeleteButton = (item) => {
        
        const agree = window.confirm(`are you sure to delete ${item.username}?`)
        if(agree){
            fetch(`https://photoguru-server.vercel.app/review/${item._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remainingUsers = review.filter(usr => usr._id !== item._id);
                    setReview(remainingUsers);
                    toast.success("review deleted successfully")
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
            <div className='mt-5 flex gap-5 justify-center'>
                <button onClick={()=>handleDeleteButton(item)} className='btn btn-danger'>Delete</button>
                <button onClick={()=>handleUpdateBtn(item)} className='btn btn-warning'>Update</button>
            </div>
            
        </div>
    );
};

export default AllReviewItem;