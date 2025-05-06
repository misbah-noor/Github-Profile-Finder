import React from 'react';

function ProfileCard({user, repos}) {

return(
    <div className='bg-white shadow-md rounded-lg p-6 text-center mt-8 max-w-3xl  lg:h-120 md:h-170  w-full'>
    <div className='flex flex-col lg:flex-row gap-4 jusity-center items-center flex-wrap'>
        <div className=''>
         <div className='p-2'>
         <img src={user.avatar_url} alt="avatar" 
        className='w-39 h-39 object-cover rounded-full'
        /></div>   
        <div><a href={user.html_url} target='_blank' rel='noreferrer' className='text-white mt-2 inline-block px-4 py-2 bg-blue-500  rounded-md font-semibold text-lg'>
            View Profile
        </a></div>
        </div>
        <div className='w-full max-w-md'>    
        <h2 className='text-shadow-gray-800 text-3xl font-semibold mt-4 mb-1'>{user.name || user.login}</h2>
        <p className='text-gray-500 text-lg mb-2'>@{user.login}</p>
        <p className='text-gray-500 text-xl'>{user.bio}</p>
        <ul className="flex sm:flex-row items-center justify-center mt-5 text-md md:gap-2 gap-1">
        <li className='flex flex-col font-bold'>{user.public_repos}<span className=' font-semibold rounded p-2 text-gray-600'>Repos</span></li>
        <li className='flex flex-col font-bold'>{user.followers}<span className=' font-semibold rounded p-2 text-gray-600'>Followers</span></li>
        <li className='flex flex-col font-bold'>{user.following}<span className=' font-semibold rounded p-2 text-gray-600'>Following</span></li>
            
        </ul>
        {repos.length > 0 && (
            <div className='text-left mt-6'>
            <h3 className='text-xl pl-15 font-semibold mb-2'>Recent Repositories:</h3>
            <ul className='list-disc pl-15'>
            {repos.map((repo) => (
                <li key={repo.id}><a href={repo.html_url} target='_blank' rel='noreferrer' className='text-blue-500'>{repo.name}</a></li>
            ))}
            </ul>
            </div>
        )}
        
        </div>
    
       
    
        
    </div>
    </div>
);
};

export default ProfileCard;