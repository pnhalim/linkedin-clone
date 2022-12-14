import React from 'react'
import Logo from '../img/munchin-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/FoodBank';
import ReserveIcon from '@mui/icons-material/Book';
import NetworkIcon from '@mui/icons-material/Fastfood';
import MessageIcon from '@mui/icons-material/EmojiFoodBeverage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth'
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className='flex justify-center z-50 pt-2 shadow w-screen sticky top-0 bg-white'>
      <div className='max-w-6xl grow md:flex justify-between'>
        {/* Left Header - only appears on md*/}
        <div className='hidden md:flex h-10'> 
        <img className='h-10 ml-6 xl:ml-3' src={Logo} alt="logo" />
            <div className='ml-2 mt-0.5 focus-within:outline outline-2 outline-neutral-900 bg-background py-0.5 rounded-md'>
              <SearchIcon className='opacity-60 scale-90 ml-3 mr-1 mb-1' />  
              <input className='bg-transparent focus:outline-none lg:w-64 pt-1.5 pb-1' type='text' placeholder='Search' />
            </div>
        </div>  
        {/* Right Header */}
        <div className='flex justify-around'>
          <img className='block md:hidden h-10 ml-6 mb-2' src={Logo} alt="logo" />
          {/* Search Button */}
          <div className='grid md:hidden px-3 w-20 min-w-max opacity-60 justify-items-center hover:opacity-100 transition items-center pb-1.5'>
            <SearchIcon className='scale-125 sm:scale-110 p-0.5 sm:p-0' />
            <h3 className='text-sm pt-0.5 hidden sm:block'>Search</h3>
          </div>
          {/* Options */}
          <HeaderOption Icon={FeedIcon} title='Feed' />
          <HeaderOption Icon={NetworkIcon} title='My Network' />
          <div className='hidden sm:flex justify-around'><HeaderOption Icon={ReserveIcon} title='Reservations' /></div>
          <HeaderOption Icon={MessageIcon} title='The Tea' />
          <HeaderOption Icon={NotificationsIcon} title='Notifs' />
          <HeaderOption onClick={logoutOfApp} avatar={user.photoURL} displayName={user.displayName} title='Sign Out' />
        </div>
      </div>
    </div>
  )
}

export default Header