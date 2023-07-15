
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../contexts/AuthProvider/AuthProvider'
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../components/Loading/Loading';
import { useContext } from 'react';


const AdminRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  const [isAdmin,isAdminLoading]=useAdmin(user?.email);
  const location=useLocation();
  if(user || isAdmin){
    return children
  }
  if(loading || isAdminLoading){
    return <Loading></Loading>
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default AdminRoute;