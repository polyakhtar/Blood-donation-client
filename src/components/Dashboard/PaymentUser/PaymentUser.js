import React, { useEffect, useState } from 'react';
import { BiDonateBlood } from 'react-icons/bi';

const PaymentUser = () => {
    const [paidUser,setPaidUser]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/payments')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setPaidUser(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Paid User's List</h1>
            <div className="flex justify-center items-center mx-auto mt-6">
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
              <span className=' mx-1 text-2xl text-red-500'> <BiDonateBlood></BiDonateBlood></span>
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
            </div>
        <div className="overflow-x-auto my-10 p-4">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className='mb-10'>
              <th className="px-4 font-Poppins py-2">Image</th>
              <th className="px-4 font-Poppins py-2">Name</th>
              <th className="px-4 font-Poppins py-2">Email</th>
              <th className="px-4 font-Poppins py-2">Transaction ID</th>
              <th className="px-4 font-Poppins py-2">Price</th>
            </tr>
          </thead>
          <tbody>
             {paidUser.map((item) => (
              <tr key={item.transactionId}>
                <td className="border px-4 py-2">
                <div className="avatar">
               <div className="w-12 rounded-full">
                 <img src={item.photoURL} alt="" />
               </div>
              </div>
                </td>
                <td className="border px-20 font-bold py-2">{item.name}</td>
                <td className="border px-20 font-semibold py-2">{item.email}</td>
                <td className="border px-20 font-bold py-2">{item.transactionId}</td>
                <td className="border px-20 font-semibold py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default PaymentUser;