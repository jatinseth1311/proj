
import { Button } from "reactstrap";
import React, { Component,Fragment} from "react";
import {Form, FormGroup, Label, Input, Container,Jumbotron } from 'reactstrap';
import axios from "axios";
export class AddFeedback extends Component{

  constructor(props) {
    super(props)

    this.state = {
        feedbackCriteria1:'',
        feedbackCriteria2:'',
        feedbackCriteria3:'',
        feedbackCriteria4:'',
        feedbackCriteria5:'',
        comments:"",
        suggestions:"",
        commentsError:"",
        suggestionsError:"",
        feedbackCriteria1Error:"",
        feedbackCriteria2Error:"",
        feedbackCriteria3Error:"",
        feedbackCriteria4Error:"",
        feedbackCriteria5Error:"",
    }
    
    this.handleForm=this.handleForm.bind(this);   // 
}
// Function created to validate the form  
valid()
{
  if(this.state.feedbackCriteria1.length==0)
  {
    this.setState({feedbackCriteria1Error:"Required"});
    return false
  }
  if(this.state.feedbackCriteria2.length==0)
  {
    this.setState({feedbackCriteria2Error:"Required"});
  return false
  }
  if(this.state.feedbackCriteria3.length==0)
  {
    this.setState({feedbackCriteria3Error:"Required"});
    return false
  }
  if(this.state.feedbackCriteria4.length==0)
  {
    this.setState({feedbackCriteria4Error:"Required"});
    return false
  }
  if(this.state.feedbackCriteria5.length==0)
  {
    this.setState({feedbackCriteria5Error:"Required"});
    return false
  }
  if(this.state.comments.length < 2)
  {
    this.setState({commentsError:"invalid comment"});
    return false
  }
  if(this.state.suggestions.length<2)
  {
    this.setState({suggestionsError:"invalid suggestions"});
  }
  else 
  {  return true
  }
  
}
handleForm = (a) => {
  a.preventDefault();                   
  this.setState({commentsError:""});
  this.setState({suggestionsError:""});
  this.setState({feedbackCriteria1Error:""})
  this.setState({feedbackCriteria2Error:""})
  this.setState({feedbackCriteria3Error:""})
  this.setState({feedbackCriteria4Error:""})
  this.setState({feedbackCriteria5Error:""})
  if(this.valid()){
  axios.post("http://localhost:8004/fdbc/addFeedback",this.state).then((response)=>
  {
      alert("Feedback submitted with ID :"+response.data.feedbackId)
  }).catch(error=>{        
      console.log(error)
  })
}
else
{alert("error"); }
}
render()
{
    return ( 
 <Fragment>
   
   <div className="w-75 mx-auto shadow p-3">
     
<h1 className="text-center text-info">Fill FeedbackForm</h1><hr/>
<br/><br/>
<br/><label><h5 >Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</h5></label>
   <Form onSubmit ={this.handleForm}>
        <FormGroup>
        <Label for="How was Your experience with FeedbackCriteria1" ><h4>How was Your experience with Feedback Criteria 1</h4></Label>
        <Input type="select"
         name="select"
          id="exampleSelect1"
          onChange={(e)=>{
            this.setState({feedbackCriteria1: e.target.value});
          }}>
         
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <p>{this.state.feedbackCriteria1Error}</p>
  
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria1"><h4>How was Your experience with Feedback Criteria 2</h4></Label>
        <Input type="select" name="select" id="exampleSelect2" 
        onChange={(e)=>{
          this.setState({feedbackCriteria2:e.target.value});
        }}
        >
           <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <p>{this.state.feedbackCriteria2Error}</p>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria3"><h4>How was Your experience with Feedback Criteria 3</h4></Label>
        <Input type="select" name="select" id="exampleSelect3" 
        onChange={(e)=>{
          this.setState({feedbackCriteria3:e.target.value});
        }}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <p>{this.state.feedbackCriteria3Error}</p>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria4"><h4>How was Your experience with Feedback Criteria 4  </h4></Label>
        <Input type="select" name="select" id="exampleSelect4" onChange={(e)=>{
          this.setState({feedbackCriteria4:e.target.value});
        }}>
           <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <p>{this.state.feedbackCriteria4Error}</p>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria5"><h4>How was Your experience with Feedback Criteria 5  </h4></Label>
        <Input type="select" name="select" id="exampleSelect5" 
        onChange={(e)=>{
          this.setState({feedbackCriteria5:e.target.value});
        }}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <p>{this.state.feedbackCriteria5Error}</p>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" ><h4>Comments</h4></Label>
        <Input type="textarea" name="text" id="exampleText" 
        placeholder="Enter the comments.."style={{height:100}}
        onChange={(e)=>{
          this.setState({comments:e.target.value});
        }}  />
        <p>{this.state.commentsError}</p>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText"><h4>Suggestions</h4></Label>
        <Input type="textarea" name="text" id="exampleText1" placeholder="Enter the suggestions.."style={{height:100}}
        onChange={(e)=>{
          this.setState({suggestions:e.target.value});
        }}/>
              <p >{this.state.suggestionsError}</p>
      </FormGroup>
      <Container className="text-center">
        <Button type="submit" color="success" className="btn-lg">SUBMIT</Button>
      </Container>
        </Form>
        <br/><br/><br/><br/>
        </div>
        
        
    </Fragment>
    );
      }
    }    

     export default AddFeedback
