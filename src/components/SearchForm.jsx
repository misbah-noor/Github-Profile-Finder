import React from 'react'

function SearchForm({onSearch}) {

  const handleSubmit =(e) => {
    e.preventDefault();
    const username = e.target.elements.searchInput.value;
    onSearch(username);
  }

 return(
  <div>
    <form onSubmit={handleSubmit} className='flex gap-2'>
        <div className='flex'>
        <input type="text"
      name='searchInput'
      placeholder='Enter GitHub username...'
      className='md:py-3 flex-1 py-0 border border-none bg-white px-4 md:px-8 w-full rounded-full text-gray-800 md:text-xl text-lg outline-none'
      />
      <button type='submit' className='border border-blue-600 bg-blue-400 hover:bg-blue-500 text-white ml-[-33%] md:ml-[-29%] px-6 my-2 py-2 rounded-full text-lg font-semibold'>Search</button>
        </div>
 
    </form>
  </div>
 )
};
  
  export default SearchForm;
  