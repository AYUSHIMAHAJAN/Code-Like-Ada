import React from 'react'
import { Link } from 'react-router-dom'
const Footer = (props) => {
  return (
    
    <footer class="text-white text-center"style={{marginTop:"35px",backgroundColor:`${(props.mode!=="dark"?"#f8f9fa":"rgb(33,37,41")}`}}>

  <div class="container p-4 pb-0 ">

    <section class="mb-4">
     
      <a
      data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:"#3b5998"}}
        href="/"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="/"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

     

    
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="/"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
 
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="/"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    
  </div>


  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)",color:`${(props.mode==="dark"?"#f8f9fa":"rgb(33,37,41)")}`}}>
    © 2024 Copyright:
<Link  to="/" style={{color:`${(props.mode==="dark"?"white":"black")}`}}>TazaKhbre.com</Link>
   
  </div>
  
</footer>

  )
}

export default Footer