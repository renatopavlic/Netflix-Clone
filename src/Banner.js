import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {

  const [movie, setMovie] = useState([]);

  // Shorten the movie description with ...
  const truncate = ( string, n ) => {
    return string?.length > n ? string.substr(0, n-1) + "..." :
    string
  };

  useEffect(() => {
    // Fetch movie
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
    
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );

      return request;
    };

    // Call the function to fetch
    fetchData();
  }, [])

  console.log(movie)

  return (
    <header 
      className="banner" 
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>
      
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(`
          This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner;
