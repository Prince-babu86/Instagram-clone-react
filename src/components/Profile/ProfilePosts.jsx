import React from 'react'

const ProfilePosts = () => {
  return (
    <div className='w-full  flex flex-wrap mt-1 gap-1 '>
      <div className="profile_post_item relative flex items-center justify-center w-72 h-[370px] cursor-pointer group-hover:100">
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/30/2f/18/302f18437098a10321f7d74978d64fb7.jpg" alt="" />
      </div>
       <div className="profile_post_item relative flex items-center justify-center w-72 h-[370px] cursor-pointer ">
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/1200x/e0/90/b8/e090b88f9d94ac4e738e06cf38a2355d.jpg" alt="" />
      </div>

       <div className="profile_post_item relative flex items-center justify-center w-72 h-[370px] cursor-pointer ">
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/f2/58/73/f258738a08e71cb040fa18b61afc5575.jpg" alt="" />
      </div>

      <div className="profile_post_item relative flex items-center justify-center w-72 h-[370px] cursor-pointer ">
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/e6/47/f4/e647f46c4f083326d875d6b5eba1c907.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default ProfilePosts