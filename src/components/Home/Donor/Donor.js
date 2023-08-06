import React, { useEffect, useState } from 'react';
import DonorNav from './DonorNav/DonorNav';
import SideBar from './SideBar/SideBar';


const Donor = () => {
  

  const [approvedDonor,setApprovedDonor]=useState([]);
  useEffect(()=>{
    fetch('https://blood-donation-server-psi.vercel.app/approveddonor')
    .then(res=>res.json())
    .then(data=>{
      setApprovedDonor(data)
    })
  },[])
  const [selectedBloodGroup,setSelectedBloodGroup]=useState(null);
  // ======Input filter======
  const [query,setQuery]=useState('');
  const handleInputChange=event=>{
    setQuery(event.target.value)
  }
  const filteredItems = approvedDonor.filter(
    (donor) =>
      donor.donorLocation.toLowerCase().includes(query.toLowerCase()) ||
      donor.donorGroup.toLowerCase().includes(query.toLowerCase())
  );

  // ===== Radio filter ====
  const handleChange=event=>{
    setSelectedBloodGroup(event.target.value)
  }
  function filteredData(approvedDonors, selected, query) {
    let filteredDonors = approvedDonors;
  
    // Filtering input items
    if (query) {
      filteredDonors = filteredDonors.filter(
        (donor) =>
          donor.donorLocation.toLowerCase().includes(query.toLowerCase()) ||
          donor.donorGroup.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selected) {
      filteredDonors = filteredDonors.filter(
        ({ donorLocation, donorGroup }) =>
          donorLocation === selected || donorGroup === selected
      );
    }
  
    return filteredDonors;
  }
  const result=filteredData(approvedDonor,selectedBloodGroup,query)

    return ( 
      <div className='overflow-x-hidden'> 
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gray-200 lg:w-1/4">
      <SideBar handleChange={handleChange}></SideBar>    
      </div>
        <div className='w-full'>
        <DonorNav query={query} handleInputChange={handleInputChange}></DonorNav> 
             <div className="p-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                 {
                    result.map((donor,i)=>
                    <div key={i} className='my-4'>
                        <img className="object-cover w-full rounded-lg h-96 " src={donor.donorPhoto} alt="" />
                        <h2 className="mt-4 text-xl font-bold text-gray-800 capitalize font-Poppins">Donor Name: {donor.donorName}</h2>
                        <p className="mt-2 text-lg font-semibold uppercase font-Poppins ">Location: {donor.donorLocation}</p>
                        <p className="mt-2 text-lg font-semibold uppercase font-Poppins">Blood Group: <span className='text-red-600'>{donor.donorGroup}</span> </p>
                        <p className="mt-2 text-lg font-semibold uppercase  font-Poppins">Mobile No: {donor.donorNumber}</p>
                      </div>)
                } 
                
                
              </div> 
        </div>
        </div>
        </div>
        
    );
};

export default Donor;