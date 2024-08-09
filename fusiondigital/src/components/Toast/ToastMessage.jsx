import logo from '../../assets/icons/favicon-32x32.png';

import 'react-toastify/dist/ReactToastify.css';
import './ToastMessage.scss'

export const toastSucess = {
  position: 'top-center',
  theme: "dark",
  closeOnClick: true,
  pauseOnHover: true,
  autoClose: 2000, 
  progressBar: true,
  icon: <img src={logo} alt="Success Icon" width="24" height="24" />,
  };

export const toastWarning = {
  position: 'top-center',
  theme: "dark",
  closeOnClick: true,
  pauseOnHover: true,
  autoClose: 3000, 
  progressBar: true,
  icon: <img src={logo} alt="Success Icon" width="24" height="24" />,
  };