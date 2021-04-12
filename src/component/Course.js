import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFotter,
    Button,
    Container,
    Jumbotron
} from "reactstrap";

const Course =({course})=>{

    const deleteCourse=({course})=>{
        axios.delete("http://localhost:8004/feedback/removecourse").then(
            (response)=>{
                toast.success("course deleted");

            },
            (error)=>{
                toast.error("course not deleted");

            }
        );
    };



    return(

    
    <Card>
        
        <CardBody>
            <CardSubtitle className="font-weight-bold text-center">{course.courseId}</CardSubtitle>
            <CardText className="text-center">{course.courseName}</CardText>
            <CardText className="text-center">{course.courseDescription}</CardText>
            <CardText className="text-center">{course.noOfDays}</CardText>
            <Container className="text-center">
                <Button color="danger" outline onClick={()=>{
                    deleteCourse(course);
                }}>Delete</Button>
                <Button color="warning ml-3" outline>Update</Button>
            </Container>
        </CardBody>
        

    </Card>
    
    );

}

export default Course