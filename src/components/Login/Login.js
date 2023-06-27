import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import loginAnimation from '../../assets/login.json';
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {logIn,googleSignIn}=useContext(AuthContext);
  const {register,formState: { errors },handleSubmit}=useForm();
  const [logInError,setLogInError]=useState('');
  const googleProvider=new GoogleAuthProvider();
  const handleLogIn=data=>{
    console.log(data)
    setLogInError('');
    logIn(data.email,data.password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      
     
    })
    .catch(error=>{
      console.log(error.message)
      setLogInError(error.message)
    }) 
}
const handleGoogleSignIn=()=>{
  googleSignIn(googleProvider)
  .then(result=>{
      const user=result.user;
      console.log(user);
  })
  .catch(error=>{
      console.log(error)
  })
}
    return (
        <section className="bg-red-200 dark:bg-gray-900" style={{paddingLeft:'4%',paddingRight:'4%'}}>
        <div className="container px-6 py-2 mx-auto  ">
          <div className="lg:flex lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
            <Lottie animationData={loginAnimation}></Lottie>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
            <h1 className="text-3xl font-bold uppercase text-center text-gray-600 font-Poppins my-4">Log In Now</h1>
            <div className="w-full lg:max-w-xl border border-2 p-12 rounded-lg">
              <form onSubmit={handleSubmit(handleLogIn)}>
              <div>
  <div className=" relative flex items-center mt-4">
              <span className="absolute">
                  <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" className="w-6 h-6 mx-3" alt="" />
              </span>
              <input type="email" {...register("email",{required:"Email is required",
              })} className="block w-full px-10 py-3 font-Poppins text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
              </div>
              {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
</div>
                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                  <img src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png" className="w-6 h-6 mx-3" alt="" />
                  </span>
                  <input type="password" className="block w-full font-Poppins px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                </div>
                <div className="mt-4 md:flex md:items-center my-2">
                  <button className="w-full px-6 py-2 text-sm font-medium font-Poppins tracking-wide text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-700 mr-2 my-4">
                    Sign in
                  </button>
                </div>
                
                <p className='font-Poppins'><span className='text-lg font-medium'>New To This Website ?</span>
                <Link to='/register' className="ml-2 hover:underline text-lg font-semibold text-blue-500">
                    Create an Account
                  </Link>
                  </p>
              </form>
              {logInError && <p className='text-red-600 font-medium my-2'>{logInError}</p>}
              <button onClick={handleGoogleSignIn} className="w-full px-6 py-2 text-sm uppercase font-Poppins font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 my-4">
                  Google Sign in
                  </button>
                  </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;