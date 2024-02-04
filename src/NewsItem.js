import React from 'react'


const NewsItem=(props)=> {
      return (

        
            <div >
                <div class="card my-2">
                
                    <img src={props.imgUrl}  alt="..." / >
                    <div class="card-body" style={{backgroundColor:`${(props.mode === 'light' ? 'white' : '#223756')}`,color:`${(props.mode === 'light' ? 'black' : 'white')}`}}>
                        <h5 class="card-title">{props.title}..</h5>
                        <p class="card-text">{props.description}...</p>
                        <p class="card-text">Rating-{props.rating}</p>
                        {/* <p class="card-text"> <small>By {props.author}on {new Date(props.date).toGMTString()} </small></p> */}
                        {/* <a href={props.newsUrl} id="btn">Read More</a> */}
                    </div>
                </div>
            </div>
            
        )
    }


export default NewsItem
