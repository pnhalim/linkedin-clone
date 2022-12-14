import React from 'react'
import { Avatar } from "@mui/material"
import BackgroundImg from '../img/background-img.png'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
/*
    Name, Avatar, Img
    Profile Views, Impressions on Post
*/
function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic, link = '') => (
        <div onClick={() => window.open(link)} className='flex py-1 px-3 opacity-60 hover:opacity-100 hover:bg-neutral-100 cursor-pointer transition ease-in-out'>
            <RestaurantIcon className='pr-1' />
            <p className="ml-1 mt-1 text-sm font-semibold">{topic}</p>
        </div>
    )

  return (
    <div className='w-full max-w-[33rem] md:w-56'>
        { /* Top */ }
        <div className='w-full flex flex-col items-center bg-white grow shadow rounded-md overflow-hidden mb-3'>
            <div className='relative w-full h-32'>
                <img className='object-cover opacity-90 w-full md:w-56 h-20' src={BackgroundImg} alt='' />
                <div className='absolute bottom-5 left-1/2 md:left-20'>
                    <Avatar className='border-white border-2 !h-16 !w-16 scale-125 -left-8 md:left-0' src={user.photoURL} />
                </div>
            </div>
            <h1 className="font-semibold text-lg">{user.displayName}</h1>
            <h2 className="text-sm text-neutral-500 text-center mx-3 mb-3">{user.description}</h2>

            <div className="hidden md:block w-56 border-t border-bg py-2 ">
                <div className='flex justify-between py-1 px-3 hover:bg-neutral-100 cursor-pointer'>
                    <p className="text-sm font-semibold text-neutral-500">Who's viewed your profile</p>
                    <p className="text-sm text-primary font-semibold">114</p>
                </div>
                <div className='flex justify-between py-1 px-3 hover:bg-neutral-100 cursor-pointer'>
                    <p className="text-sm font-semibold text-neutral-500">Impressions of your post</p>
                    <p className="text-sm text-primary font-semibold">555</p>
                </div>
            </div>
        </div>
        { /* Bottom */ }
        <div className='hidden md:block mt-3 bg-white grow shadow rounded-md overflow-hidden sticky top-[5.5rem]'>
            <div className='my-3'> 
                <h1 className='text-sm px-3 py-1'>Recent</h1>
                {recentItem('Making MunchIn', 'https://github.com/pnhalim/linkedin-clone')}
                {recentItem('Learning React JS', 'https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d')}
                {recentItem('Making an Image Gallery', 'https://github.com/pnhalim/image-gallery')}
                {recentItem('Learning Tailwind CSS', 'https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw')}
                {recentItem('Learning HTML/CSS/JS', 'https://www.w3schools.com/tags/default.asp')}

            </div>
        </div>
    </div>
  )
}

export default Sidebar