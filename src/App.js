
import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes';


function App() {
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
