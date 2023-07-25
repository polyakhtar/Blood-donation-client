import React from 'react';
import { FaTwitter,FaFacebook,FaLinkedin } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <section className="min-h-screen bg-cover " style={{backgroundImage: 'url("https://images.pexels.com/photos/5340266/pexels-photo-5340266.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
        <div className="flex flex-col min-h-screen bg-black/60" style={{paddingLeft:'4%',paddingRight:'4%'}}>
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold uppercase lg:text-4xl font-Poppins">Contact With Us</h1>
                <p className="max-w-xl mt-6 text-lg font-Poppins">
                We’re here to help, whatever you need. Pick a way to get in touch and give us a buzz, drop us a line, or send us an old-fashioned letter. We will try to fulfill your wish.
                </p>
                <button className=" px-5 py-2 mt-4 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-gray-600 focus:outline-none font-Poppins">
                  get in touch
                </button>
                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 text-xl font-Poppins">Follow us</h3>
                  <div className="flex mt-4 -mx-1.5 ">
                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://twitter.com/PolyAkhtar" target='blank'>
                      <FaTwitter className='text-2xl'></FaTwitter>
                    </a>
                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://www.facebook.com/poly.akhter00/" target='blank'>
                      <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="https://www.linkedin.com/in/poly-akhtar/" target='blank'>
                      <FaLinkedin className='text-2xl'></FaLinkedin>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 font-Poppins">Contact form</h1>
                  <p className="mt-2 text-xl text-gray-500 dark:text-gray-400 font-Poppins">
                    Ask us everything and we would love
                    to hear from you
                  </p>
                  <form className="mt-6" action="https://formsubmit.co/poly09876pm@gmail.com" method="POST">
                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200 font-Poppins">Email address</label>
                      <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring font-Poppins text-lg" />
                    </div>
                    <div className="w-full mt-6">
                      <label className="block mb-2 text-gray-600 dark:text-gray-200 font-Poppins text-lg">Message</label>
                      <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48  focus:border-red-500 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring font-Poppins text-lg" placeholder="Message" defaultValue={""} />
                    </div>
                    <button className="w-full px-6 py-3 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50" >
                      get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contact;