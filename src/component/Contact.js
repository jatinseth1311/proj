import React from 'react';
import {Jumbotron, Container ,Button} from 'reactstrap';
import { useEffect, useState } from 'react';

const Home =()=>{

    useEffect(()=>{
        document.title="Home";

    },[])
    return(
       <div >
           <Jumbotron > 
           <h1>Welcome To Feedback Management System </h1><br/>
           <p className="display-5"><h2>This website is devolped for managing feedbacks of different trainer and managing different courses/program in an Organization</h2> </p>
           </Jumbotron>

       </div>
      
    );
}

export default Home;