import React from 'react';
import { toast } from 'react-hot-toast';

const DonorForm = () => {
const handleSubmit=event=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const location=form.location.value;
  const group=form.group.value;
  const photo=form.photo.value;
  const number=form.number.value;
console.log(name,location,group,photo,number)
const formData=new FormData();
formData.append('photo',photo);
const donor={
      name,
      location,
      group,
      photo,
      number
};
fetch('https://blood-donation-server-psi.vercel.app/donor',{
  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(donor)
})
.then(res=>res.json())
.then(data=>{
  // console.log(data)
  if(data.acknowledged){
    toast.success('Registration Successful');
    form.reset();
  }
})


}
    return (
      <div className="w-full bg-cover transparent lg:py-16 py-10 flex flex-col items-center justify-center" style={{backgroundImage:'url("https://media.istockphoto.com/id/1372955035/vector/world-blood-donor-day-poster-in-paper-cut-style-3d-red-background-with-liquid-waves-vector.jpg?s=612x612&w=0&k=20&c=JsXXjMZStIBnOdELgqF1RRBmFbYtrGHGnYBf8oJKIOM=")'}}>
      <div className='py-8 lg:w-2/5 md:w-2/5' >
    <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-9 text-white text-center font-Poppins">
    Donor Registration</h1>
     <form className="mt-6 border border-2 p-6 rounded" onSubmit={handleSubmit}>
<div>
  <label htmlFor="username" className="block text-lg font-semibold text-white">Name</label>
  <input type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
</div>
<div className="mt-4">
  <div className="flex items-center justify-between">
    <label htmlFor="location" className="block text-lg font-semibold text-white">Location</label>
  </div>
  <input type="text" name='location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
</div>
<div className="mt-4">
  <div className="flex items-center justify-between">
    <label htmlFor="location" className="block text-lg font-semibold text-white">Blood Group</label>
  </div>
  <select type='text' name='group' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'>
    <option selected>A+</option>
    <option >A-</option>
    <option >B+</option>
    <option >B-</option>
    <option >O+</option>
    <option >O-</option>
    <option >AB+</option>
    <option>AB-</option>
  </select>
</div>
<div className="mt-4">
  <div className="flex items-center justify-between">
    <label htmlFor="photo" className="block text-lg font-semibold text-white">Photo</label>
  </div>
  <input type="text" name='photo' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
</div>
<div className="mt-4">
  <div className="flex items-center justify-between">
    <label htmlFor="password" className="block text-lg font-semibold text-white">Mobile</label>
  </div>
  <input type="number" name='number' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
</div>
<div className="mt-6">
  <button className="w-full px-6 py-2.5 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
    Registration
  </button>
</div>
</form>
            </div>
            </div>
    );
};

export default DonorForm;