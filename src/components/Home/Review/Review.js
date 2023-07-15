
import Carousel from './Carousel/Carousel';

const Review = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1349142193/photo/compatibility-between-man-and-woman.jpg?s=612x612&w=0&k=20&c=0e6IMo2snlVDY__SiRzOJ13_tMwSYChM2CN9hrnU250=")',
  };
   
    return (
      <div className='my-20'>
         <h1 className='text-3xl font-bold font-Poppins text-red-600 text-center mt-10 mb-6'>Donor And Recipient Opinion</h1>
    <div className="w-full bg-cover flex flex-col items-center justify-center text-center" style={backgroundStyle}>
      <div className='w-full h-full py-10 bg-black/40'>
   
                <Carousel></Carousel>
             
                </div>
       
      </div>
      </div>
    );
};

export default Review;