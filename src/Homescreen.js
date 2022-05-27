import React from "react";
import Banner from "./Banner";
import "./Homescreen.css";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function Homescreen() {
  return (
    <div className="Homescreen">
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}  
       />
      <Row title='Trending Now'
      fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated'
      fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies'
      fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Romantic Movies'
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ='Documentaries'
      fetchUrl={requests.fetchDocumentaries}/> 
    </div>
  );
}

export default Homescreen;
