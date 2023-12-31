import React from 'react';
import { BiDonateBlood } from 'react-icons/bi';




const CampaignGellery = ()=> {
    return (
        <div className='lg:my-24 my-10' style={{paddingLeft:'8%',paddingRight:'8%'}}>
            <div className='text-center'>
            <h1 className="lg:text-4xl text-3xl font-bold text-gray-600 font-Poppins">CAMPAIGN GALLERY</h1>
            <div className="flex justify-center items-center mx-auto lg:my-4">
            <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
              <span className=' mx-1 text-2xl text-red-500'> <BiDonateBlood></BiDonateBlood></span>
              <span className="inline-block w-28 h-1 bg-red-500  mx-1 rounded-full" />
            </div>
            <p className='text-gray-600 font-Poppins text-xl my-2'>Latest news and statements regarding giving blood processing
         </p>
         </div>
         <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:my-12 my-8">
            <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg" alt="" />
         </div>
         <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.istockphoto.com/id/1399755086/photo/young-woman-giving-blood-closeup.jpg?s=612x612&w=0&k=20&c=n_GVkk4YQMKwadYla8ZuXQafC7za-XSelTBUNhDUhQo=" alt="" />
         </div>
         <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.istockphoto.com/id/1463489972/photo/female-nurse-holding-blood-collection-tubes.jpg?s=612x612&w=0&k=20&c=RoE5OtKSr5L93XmTyk5WcaQ7Gp2MsGiGT4LcNWJofj0=" alt="" />
         </div>
         <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.istockphoto.com/id/1354100115/photo/blood-donation-blood-donors-with-bandage-after-giving-blood.jpg?s=612x612&w=0&k=20&c=XtrzNnY5WKqwdpEc6mRY7HgUK7NoQn-28eTi-AGSBSY=" alt="" />
         </div>
         <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.istockphoto.com/id/1307735237/photo/young-male-donor-donating-blood.jpg?s=612x612&w=0&k=20&c=ZemA7-MQ2c9ty5ZKGmTM_vEUGdgZrrGFQS3smtX4rEQ=" alt="" />
         </div>
         <div>
         <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://media.istockphoto.com/id/1336682467/photo/young-caucasian-woman-with-toy-heart-in-the-hand-donates-blood.jpg?s=612x612&w=0&k=20&c=RjKpWXvR_PO8uKlVNBfQzL7605LYJwQNKV7OFxjWWBU=" alt="" />
         </div>
        </div>
        </div>
        </div>
    );
};

export default CampaignGellery;