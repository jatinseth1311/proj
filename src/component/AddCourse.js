import { Button, Jumbotron } from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";


//constructor for add course
const AddCourse=()=>{
    useEffect(()=>{
        document.title="AddCourse";

    },[])

const [course,setCourse]=useState({});

//form handler function
const handleForm=(e)=>{
    console.log(course);
    postDataOnServer(course);


    e.preventDefault();

}

//function for posting data on server
const postDataOnServer=(data)=>{
    axios.post("http://localhost:8004/feedback/addcourse",data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("course added succesfully",{
                position:'bottom-center',
              });
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("error! something went wrong");

        }
    );
}
    return(
            <Fragment>
                <Jumbotron>
                <h1 className="text-center my-3">Fill course details</h1>
              <Form onSubmit={handleForm}>
                  <FormGroup>
                      <label>CourseId</label>
                      <Input
                      type="text"
                      placeholder="Enter here"
                      name="courseId"
                      id="courseId"
                      onChange={(e)=>{
                          setCourse({...course,courseId:e.target.value});

                      }}
                      />
                  </FormGroup>
                  <FormGroup>
                  <label>Course Name</label>
                  <Input type="text" placeholder="Enter here" id="courseName"
                  onChange={(e)=>{
                    setCourse({...course,coursName:e.target.value});

                }}/>
                  </FormGroup>
                  <FormGroup>
                    <label>Description</label>
                    <Input type="textarea" 
                    placeholder="enter description here" 
                    id="courseDescription"
                    onChange={(e)=>{
                        setCourse({...course,courseDescription:e.target.value});

                    }} 
                    style={{height:100}}/>
                 </FormGroup>
                 <FormGroup>
                  <label>Course Duration</label>
                      <Input type="text" placeholder="Enter here" id="noOfDays"
                      onChange={(e)=>{
                        setCourse({...course,noOfDays:e.target.value});

                    }}/>
                  </FormGroup>
                  <Container>
                      <Button type="submit" color="success">Add</Button>
                      <Button type="reset" color="warning ml-2">Clear</Button>
                  </Container>
                </Form>
                </Jumbotron>

            </Fragment>);
        
    
};
export default AddCourse;