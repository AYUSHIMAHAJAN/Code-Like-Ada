import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const genreMap = {
  "Happy": ["Comedy","Mystery"],
  "Joyful": ["Comedy"],
  "Sad": ["Drama"],
  "Depressed": ["Drama"],
  "Adventures":["Horror"],
  "Angry": ["Action", "Thriller & Suspense", "Horror"],
  "Relaxed": ["Comedy", "Game Show", "Home Shopping", "Music", "Musical"],
  "western": ["Western"],
};

const News = (props) => {
  const [result, setResult] = useState([]);
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const mode = props.mode;
  const headers = { 'Authorization': 'Bearer 3THI9O1m0' };
  const { state } = useLocation();

 
    const words = state.transcript.split(" ");
    let word;
    for(word of words){
      word=word.charAt(0).toUpperCase() + word.slice(1);
      if(word in genreMap){
        break;
      }
    }

    const setQueryDetails = (event) => {
      console.log(event.target.value);
      setResult(
        result.filter((element) =>
          element.title.toLowerCase().includes(event.target.value)
        )
      );
    };

  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://cla-recommendation.lgads.tv/recommendation/popular?type=ott&genre=${genreMap[word][0]},${genreMap[word][1]}`,
        { headers }
      );
  
      const parsedData = await data.json();
      setResult(parsedData.ott_recommendations.contents);
      if(result.length===0){
        return (<div>
          404 Not Found
        </div>)
      }
      console.log(parsedData);
    } catch (error) {
      return (<div>
        404 Not Found
      </div>)
    
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [word]);

  return (
    <div>
    <div class="sticky-top" style={{width:"100%"}}>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Home
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  aria-label="Search"
                  placeholder="Search here..."
                  onChange={setQueryDetails}
                  
                  style={{ borderRadius: "15px" }}
                />
            </form>
        </div>
          </div>
        </nav>
      </div>
      <div style={{width: '100%',
    color: 'black',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px'}}>{word}-Recommendations <br/> For You!</div>

      <div className="container" style={{marginTop:"0px"}}>
        <div className="row">
          {result.map((element, index) => (
            <div key={index} className="col-md-3">
                <Link to="/Videos" state={{title:`${element.title}`}} style={{textDecoration:"none"}}>
                <NewsItem style={{cursor:"pointer"}}
                title={element.title.slice(0,88)}
                description={element.description.slice(0,88)}
                imgUrl={element.thumbnail}
                rating={element.rating}
              />
              </Link>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

