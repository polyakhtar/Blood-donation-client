import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const ApproveDonor = () => {
  const [donors, setDonors] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedDisabledButtons = JSON.parse(localStorage.getItem('disabledButtons'));

    if (storedDisabledButtons && Array.isArray(storedDisabledButtons) && storedDisabledButtons.length > 0) {
      setDisabledButtons(storedDisabledButtons);
    }

    fetchDonors();
  }, []);

  useEffect(() => {
    localStorage.setItem('disabledButtons', JSON.stringify(disabledButtons));
  }, [disabledButtons]);

  const fetchDonors = () => {
    fetch('http://localhost:5000/donors')
      .then((res) => res.json())
      .then((data) => {
        setDonors(data);

        const storedDisabledButtons = JSON.parse(localStorage.getItem('disabledButtons'));
        if (!storedDisabledButtons || !Array.isArray(storedDisabledButtons) || storedDisabledButtons.length !== data.length) {
          setDisabledButtons(new Array(data.length).fill(false));
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching donors:', error);
        setError('Error fetching donors. Please try again later.');
        setIsLoading(false);
      });
  };

  const handleApprove = (event, index) => {
    // ... rest of the code for handleApprove
    event.preventDefault();

const donor = donors[index];
const donorData = {
  donorName: donor.name,
  donorLocation: donor.location,
  donorNumber: donor.number,
  donorGroup: donor.group,
  donorPhoto: donor.photo,
};

const updatedDisabledButtons = [...disabledButtons];
updatedDisabledButtons[index] = true;
setDisabledButtons(updatedDisabledButtons);

    // Update the disabled buttons state after API call is successful
    fetch('http://localhost:5000/approveddonor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donorData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const updatedDisabledButtons = [...disabledButtons];
          updatedDisabledButtons[index] = true;
          setDisabledButtons(updatedDisabledButtons);

          toast.success('Approved Successfully');
        }
      })
      .catch((error) => {
        console.error('Error approving donor:', error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      
<h1 className='text-3xl text-gray-500 font-semibold font-Poppins text-center'>Donor Request</h1>
<section className='dark:bg-gray-900'>
  <div className='container px-6 py-6 mx-auto' style={{ paddingLeft: '6%', paddingRight: '6%' }}>
    <div className='mt-8 xl:mt-16 lg:flex lg:-mx-12'>
      <div className='flex-1 mt-8 lg:mx-12 lg:mt-0'>
        <form>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {donors.length === 0 ? (
              <p>No donors available.</p>
            ) : (
              donors.map((donor, index) => (
                <div key={index} className='my-4'>
                  <img className='object-cover w-full rounded-lg h-96' src={donor.photo} alt='' />
                  <h2 className='mt-4 text-xl font-bold text-gray-800 capitalize font-Poppins'>
                    Donor Name: {donor.name}
                  </h2>
                  <p className='mt-2 text-lg font-semibold uppercase font-Poppins'>Location: {donor.location}</p>
                  <p className='mt-2 text-lg font-semibold uppercase font-Poppins'>
                    Blood Group: <span className='text-red-600'>{donor.group}</span>{' '}
                  </p>
                  <p className='mt-2 text-lg font-semibold uppercase font-Poppins'>Mobile No: {donor.number}</p>
                  <button
                    className={`px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none font-Poppins ${
                      disabledButtons[index] ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-gray-600'
                    }`}
                    disabled={disabledButtons[index]}
                    onClick={(event) => handleApprove(event, index)}
                  >
                    {disabledButtons[index] ? 'Approved' : 'Approve'}
                  </button>
                </div>
              ))
            )}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default ApproveDonor;

















