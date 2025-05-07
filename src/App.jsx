import SearchForm from './components/SearchForm';
import ProfileCard from './components/ProfileCard'
import './App.css';
import { useState } from 'react';
function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearch = async(username) => {
    try{
      const url = `https://api.github.com/users/${username}`;
      const userResponse = await fetch(url);

      if(!userResponse.ok){
      throw new Error('User not found');  
       }

       const userData = await userResponse.json();
       
       const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=4&sort=created`);
       const reposData = await reposResponse.json();

       setUserData(userData);
       setRepos(reposData);
       setError('');
      } catch (err){
      setError(err.message);
      setUserData(null);
      setRepos([]);
      setTimeout(() => {
        setError("");
      }, 3000);
      }
      };


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700  flex flex-col items-center justify-center p-4">
      <div><img src='./image/github.png' className='w-50' /></div>
      <h1 className="text-3xl md:text-5xl drop-shadow-lg font-bold mt-4 mb-8 md:mb-14 text-center text-white">GitHub Profile Finder</h1>
      
      <SearchForm onSearch={handleSearch}
      />
      
       {error && <p className='text-red-400 mt-6 transition-opacity duration-500 font-semibold ease-in-out text-xl'>{error}</p>}
           
       {userData && <ProfileCard user={userData}
       repos={repos} />}    

    </div>
  );
}

export default App;