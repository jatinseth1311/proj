import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Jumbotron } from "reactstrap";

const Allcourse=()=>{

    useEffect(()=>{
        document.title="AllCourses";

    },[])

    //function to call server
    const getAllCoursesFromServer=()=>{

        axios.get("http://localhost:8004/feedback/viewallcourses").then(
            (response)=>{
                console.log(response.data);
                toast.success("course has been loaded");
                setCourse(response.data);

            },
            (error)=>{
                console.log(error);

            }
            
        );

    };
    //calling loading function
    useEffect(()=>{
        getAllCoursesFromServer();

    }, []);



    const [courses, setCourse]=useState([
    
       
    ]
    )

return(
    <div>
        
        <h1>All Courses</h1>
        <p>list of courses are as follows</p>

        {
            courses.length>0? courses.map((item)=> <Course key={item.courseId} course={item} />
            ) : "no courses"



        }
        
    </div>
);
};

export default Allcourse; 