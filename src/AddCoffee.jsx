import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handlesubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const chef=form.chef.value
    const taste=form.taste.value
    const supplier=form.supplier.value
    const category=form.category.value
    const details=form.details.value
    const coffeeData={name,chef,taste,supplier,category,details}
    console.log(coffeeData);
    // console.log(name,chef,taste,supplier,category,details);

    fetch('http://localhost:5000/coffeeData',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(coffeeData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        console.log('added successfully');
           Swal.fire({
      position: "center",
      icon: "success",
      title: "Coffee added successfully",
      showConfirmButton: false,
      timer: 1500
    });
      }
      console.log(data);
      console.log(data.insertedId);
    })
    form.reset()
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500
    // });
  }
    return (
        <div>
        <form onSubmit={handlesubmit} className='mx-20 px-20 py-16 bg-[#F4F3F0] rounded-md'>
            <h1 className='text-5xl'>Add New Coffee</h1>
            {/* 1st row */}
            <div className='flex gap-5 w-full'>
            <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text">name</span>
               </div>
               <input type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
             </label>
            <label className="form-control w-full ">
               <div className="label">
                 <span className="label-text">Chef</span>
               </div>
               <input type="text" name='chef' placeholder="Enter chef name" className="input input-bordered w-full " />
             </label>
            </div>
            {/* 2nd row */}
            <div className='flex gap-5 w-full'>
            <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text"> supplier</span>
               </div>
               <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" />
             </label>
            <label className="form-control w-full ">
               <div className="label">
                 <span className="label-text">Enter coffee taste</span>
               </div>
               <input type="text" name='taste' placeholder="describe teste" className="input input-bordered w-full " />
             </label>
            </div>
            {/* 3 rd row */}
            <div className='flex gap-5 w-full'>
            <label className="form-control w-full max-w-xs">
               <div className="label">
                 <span className="label-text">category</span>
               </div>
               <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" />
             </label>
            <label className="form-control w-full ">
               <div className="label">
                 <span className="label-text">details</span>
               </div>
               <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full " />
             </label>
            </div>
            {/* 4 th row */}
            <div className='flex gap-5 w-full'>
  
            <label className="form-control w-full ">
               <div className="label">
               </div>
               <input type="submit" value='add coffee' placeholder="Type here" className="input input-bordered w-full bg-[#D2B48C]" />
             </label>
            </div>
        </form>
        </div>
    );
};

export default AddCoffee;