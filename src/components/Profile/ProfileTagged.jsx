import React from 'react'

const ProfileTagged = () => {
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/20/cb/ce/20cbcea673b0dadf3dbdc25970f9029d.jpg" alt="" />
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/736x/4f/89/df/4f89df9bc30010c4284c38e74b477d4e.jpg" alt="" />
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/1200x/39/02/e7/3902e7a3e2e57df9dc5e254e41cde03d.jpg" alt="" />
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
        <img className='h-full w-full object-cover object-top ' src="https://i.pinimg.com/1200x/f1/64/ce/f164ce572bddd10bbecf6462869433ba.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default ProfileTagged