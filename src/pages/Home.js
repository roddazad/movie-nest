import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard'; 


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = () => {
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=80f7dfed`)
        .then((res) => {
            if (!res.ok) {
                throw new Error ("Unable to fetch data...")
            }
            return res.json();
        })
        .then((data)=>{
             if (data.Response === "True") {
                setMovies(data.Search); // ✅ Store the array of results
            } else {
                setMovies([]); // Show nothing if no match
      }
        })
        .catch((err) => {
            console.log(err);
        })
    };
  return (
    <div>
      <Navbar />
      <Hero 
      searchTerm ={searchTerm} 
      onSearch={handleSearch} 
      setSearchTerm={setSearchTerm}/>
      <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        />
       ))}
     </div>
    </div>
  );
}
 
export default Home;