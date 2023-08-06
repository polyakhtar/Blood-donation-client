import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import regiterAnimation from '../../assets/register.json'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const [signUpError, setSignUpError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

 
  const handleRegister = (data) => {
    const { email, password } = data; // Extract email and password from form data
    createUser(email, password) // Pass email and password to createUser function
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
          photoURL: data.photo,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, email, data.photo);
           
            
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
    setSignUpError('');
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        saveUser(user.displayName, user.email, user.photoURL);
      
      })
      .catch(error => {
        console.log(error)
      })
  }
  const saveUser = (name, email, photo) => {
    const user = { name, email, photo };
    fetch(`https://blood-donation-server-psi.vercel.app/users`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('User created successfully');
          reset();
        }

      })
  }
  return (
    <section className="bg-pink-100 dark:bg-gray-900" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
      <div className="container px-6 py-16 mx-auto">
        <div className="lg:flex lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <Lottie animationData={regiterAnimation}></Lottie>
          </div>
          <div className="mt-8 w-full lg:w-1/2 lg:mt-0">

            <div className='w-full lg:max-w-xl border border-2 border-gray-300 p-6 rounded-lg'>
              <h1 className="text-3xl font-semibold uppercase text-center text-gray-600 font-Poppins my-8">Register Now</h1>
              <form onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <div className=" relative flex items-center mt-4">
                    <span className="absolute">
                      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" className="w-6 h-6 mx-3" alt="" />
                    </span>
                    <input type="text" {...register("name", { required: "Name field is required" })} className="block w-full px-10 font-Poppins py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Name' />
                  </div>
                  {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div>
                  <div className=" relative flex items-center mt-4">
                    <span className="absolute">
                      <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" className="w-6 h-6 mx-3" alt="" />
                    </span>
                    <input type="email" {...register("email", {
                      required: "Email is required",
                    })} className="block w-full px-10 py-3 font-Poppins text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
                  </div>
                  {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div>
                  <div className=" relative flex items-center mt-4">
                    <span className="absolute">
                      <img src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png" className="w-6 h-6 mx-3" alt="" />
                    </span>
                    <input
                      type="password"
                      {...register("password", {
                        required: "password field is required",
                        minLength: { value: 6, message: "password should be 6 characters or longer" },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          message: "password must have uppercase, number, and special character",
                        },
                      })}
                      className="block w-full px-10 font-Poppins py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Password"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                  </div>
                  <div>
                    <div className=" relative flex items-center mt-4">
                      <span className="absolute">
                        <img src="https://cdn-icons-png.flaticon.com/128/833/833281.png" className="w-6 h-6 mx-3" alt="" />
                      </span>
                      <input type="text" {...register("photo", { required: "Photourl must be needed" })} className="block w-full px-10 py-3 font-Poppins text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo" />
                    </div>
                    {errors.photo && <p className='text-red-600'>{errors.name.photo}</p>}
                  </div>
                  <div className="mt-4 md:items-center my-2">
                    <button className="w-full px-6 py-2 text-sm font-Poppins font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mr-2 my-2">
                      Sign in
                    </button>
                  </div>
                </div>
                <p className='font-Poppins my-2'> <span className='text-lg font-medium '>Already have an account ?</span>
                  <Link to='/login' className="ml-2 hover:underline text-lg font-semibold text-blue-500">
                    Please Log In
                  </Link>
                </p>
              </form>
              {signUpError && <p className='text-red-600 font-medium my-2'>{signUpError}</p>}
              <button onClick={handleGoogleSignIn} className="w-full px-6 py-2 text-sm font-Poppins font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 my-2">
                Google Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;