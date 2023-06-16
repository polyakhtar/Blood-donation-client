import React from 'react';

const DonateProcess = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
            <h1 className='text-5xl font-bold text-gray-600 font-Poppins'>DONATION PROCESS</h1>
            <p className='text-gray-600 font-Poppins text-xl my-2'>The donation process from the time you arrive center until the time you leave
           </p>
           </div>
           <div className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' style={{paddingLeft:'6%',paddingRight:'6%'}}>
           <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVnaXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">1</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white font-Poppins">REGISTRATION</h1>
          <p className="py-2 font-medium text-lg text-gray-700 dark:text-gray-400 font-Poppins">You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.
         </p>
        </div>
      </div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjcmVlbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">2</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white font-Poppins">SCREENING</h1>
          <p className="py-2 font-medium text-lg text-gray-700 dark:text-gray-400 font-Poppins">A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.


         </p>
        </div>
      </div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">3</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white font-Poppins">DONATION</h1>
          <p className="py-2 font-medium text-lg text-gray-700 dark:text-gray-400 font-Poppins">After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.


         </p>
        </div>
      </div>
           </div>
            
        </div>
    );
};

export default DonateProcess;