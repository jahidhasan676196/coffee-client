import React from 'react';
import Swal from 'sweetalert2';

const Card = ({user}) => {
    const {_id,name,chef,taste,supplier,category,details}=user
    const handledelete=(id)=>{
        fetch(`http://localhost:5000/delete${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        console.log('delete is confirm');
        console.log(id);
    }
    return (
        <div className="  flex justify-between bg-[#F5F4F1] m-10 rounded-lg">
            <div className='flex flex-col m-6 gap-5'>
                <p className='text-amber-800 text-3xl'>{name}</p>
                <p>{category}</p>
                <p>{supplier}</p>
            </div>
            <div className='flex flex-col m-6 gap-5'>
            <button className="btn btn-outline btn-primary">Details</button>
            <button className="btn btn-outline btn-secondary">Update</button>
            <button 
                onClick={()=>handledelete(user._id)}
            className="btn btn-outline btn-accent">Delete</button>
            </div>
        </div>
    );
};

export default Card;