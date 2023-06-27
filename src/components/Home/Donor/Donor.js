import React, { useEffect, useState } from 'react';

const Donor = () => {
  const [query,setQuery]=useState('');
  const [donors,setDonor]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/donors')
    .then(res=>res.json())
    .then(data=>{
        setDonor(data)
    })
},[])



    return (          
        <div>
            <h1 className="text-4xl font-bold uppercase text-gray-600 font-Poppins text-center mt-10">Find your perfect donor</h1>
            <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-6 mx-auto" style={{paddingLeft:'6%',paddingRight:'6%'}}>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12 px-4">
              <h1 className="text-xl font-semibold text-gray-800 font-Poppins dark:text-white my-3">Filtering</h1>
              <input type="text" placeholder='Search by Blood Group' className='search input input-bordered w-full border-gray-400' onChange={(e)=>setQuery(e.target.value)} />
            </div>
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {
                    donors.filter((donor)=>donor.group.toLowerCase().includes(query) || donor.location.toLowerCase().includes(query)).map(donor=>
                    <div className='my-4'>
                        <img className="object-cover w-full rounded-lg h-96 " src={donor.photo} alt="" />
                        <h2 className="mt-4 text-xl font-bold text-gray-800 capitalize font-Poppins">Donor Name: {donor.name}</h2>
                        <p className="mt-2 text-lg font-semibold uppercase font-Poppins ">Location: {donor.location}</p>
                        <p className="mt-2 text-lg font-semibold uppercase font-Poppins">Blood Group: <span className='text-red-600'>{donor.group}</span> </p>
                        <p className="mt-2 text-lg font-semibold uppercase  font-Poppins">Mobile No: {donor.number}</p>
                      </div>)
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Donor;