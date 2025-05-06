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
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300  flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-5xl drop-shadow-lg font-bold mt-4 mb-8 md:mb-14 text-center text-white text-shadow-sm text-shadow-gray-50">GitHub Profile Finder</h1>
      
      <SearchForm onSearch={handleSearch}
      />
      
       {error && <p className='text-red-500 mt-6 transition-opacity duration-500 ease-in-out text-lg'>{error}</p>}
           
       {userData && <ProfileCard user={userData}
       repos={repos} />}    

    </div>
  );
}

export default App;