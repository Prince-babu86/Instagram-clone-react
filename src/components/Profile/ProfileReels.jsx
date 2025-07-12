import React from 'react'

const ProfileReels = () => {
  return (
   <div className='w-full  flex flex-wrap mt-1 gap-1 '>
      <div className="profile_post_item relative flex items-center justify-center w-[210px] h-[370px] cursor-pointer group-hover:100">
        <div style={{backgroundColor:"rgba(0,0,0,0.6)"}} className='h-full w-full flex items-center justify-center absolute left-0 top-0 opacity-0   hover:opacity-100 ease-in-out transition-all duration-500 '>
          <div className='flex items-center w-full justify-center gap-12'>
            <div className='text-md font-semibold text-white flex items-center gap-2'>

              <i className="ri-heart-3-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>5</h4>
            </div>
            <div className='text-md font-semibold text-white flex items-center gap-2'>
              <i className="ri-chat-smile-2-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>100</h4>
            </div>
          </div>
        </div>
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/52/7d/d2/527dd25afb56c519bd43407994052ca4.jpg" alt="" />
      </div>
       <div className="profile_post_item relative flex items-center justify-center w-[210px] h-[370px] cursor-pointer ">
        <div style={{backgroundColor:"rgba(0,0,0,0.6)"}} className='h-full w-full flex items-center justify-center absolute left-0 top-0 bg-slate- opacity-0   hover:opacity-100 ease-in-out transition-all duration-500 '>
          <div className='flex items-center w-full justify-center gap-12'>
            <div className='text-md font-semibold text-white flex items-center gap-2'>

              <i className="ri-heart-3-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>5</h4>
            </div>
            <div className='text-md font-semibold text-white flex items-center gap-2'>
              <i className="ri-chat-smile-2-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>100</h4>
            </div>
          </div>
        </div>
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/1200x/b3/58/6b/b3586b4aacce33ca0d95d1d859a2d755.jpg" alt="" />
      </div>

       <div className="profile_post_item relative flex items-center justify-center w-[210px] h-[370px] cursor-pointer ">
        <div style={{backgroundColor:"rgba(0,0,0,0.6)"}} className='h-full w-full flex items-center justify-center absolute left-0 top-0 bg-slate-  opacity-0   hover:opacity-100 ease-in-out transition-all duration-500'>
          <div className='flex items-center w-full justify-center gap-12'>
            <div className='text-md font-semibold text-white flex items-center gap-2'>

              <i className="ri-heart-3-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>5</h4>
            </div>
            <div className='text-md font-semibold text-white flex items-center gap-2'>
              <i className="ri-chat-smile-2-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>100</h4>
            </div>
          </div>
        </div>
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/fc/a0/52/fca052d7498cb90ae99259fd51906f4b.jpg" alt="" />
      </div>

      <div className="profile_post_item relative flex items-center justify-center w-[210px] h-[370px] cursor-pointer ">
        <div style={{backgroundColor:"rgba(0,0,0,0.6)"}} className='h-full w-full flex items-center justify-center absolute left-0 top-0 bg-slate- opacity-0   hover:opacity-100 ease-in-out transition-all duration-500 '>
          <div className='flex items-center w-full justify-center gap-12'>
            <div className='text-md font-semibold text-white flex items-center gap-2'>

              <i className="ri-heart-3-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>5</h4>
            </div>
            <div className='text-md font-semibold text-white flex items-center gap-2'>
              <i className="ri-chat-smile-2-fill text-white text-xl"></i>
              <h4 className='text-sm font-semibold'>100</h4>
            </div>
          </div>
        </div>
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/98/bc/97/98bc977bf1b39bc93b25b89f422db29c.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default ProfileReels