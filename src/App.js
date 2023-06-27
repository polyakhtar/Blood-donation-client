
import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider> 
     <Toaster></Toaster>
    </div>
  );
}

export default App;
