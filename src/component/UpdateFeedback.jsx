
import { Button } from "reactstrap";
import React, { Component,useState,useEffect,Fragment} from "react";
import {Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from "axios";
export class UpdateFeedback extends Component{

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      feedbackId:'',
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
    this.handleForm=this.handleForm.bind(this);
}
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
  this.setState({commentsError:""});
  this.setState({suggestionsError:""});
  this.setState({feedbackCriteria1Error:""})
  this.setState({feedbackCriteria2Error:""})
  this.setState({feedbackCriteria3Error:""})
  this.setState({feedbackCriteria4Error:""})
  this.setState({feedbackCriteria5Error:""})
  if(this.valid()){

  a.preventDefault();
  axios.put("http://localhost:8004/fdbc/updateFeedback",this.state).then((response)=>
  {
      alert("Updated Feedback")
  }
  ).catch(error=>{        
      console.log(error)
      
  })
  this.props.history.push(`/view-feedback`);

}
else 
alert("update fail please try again!!")}
componentDidMount(){
  axios.get("http://localhost:8004/fdbc/viewTrainerFeedback/"+this.state.id).then((res) => {
      console.log(res.data);
      this.setState({feedbackId: res.data[0].feedbackId});
      this.setState({feedbackCriteria1: res.data[0].feedbackCriteria1});
      this.setState({feedbackCriteria2: res.data[0].feedbackCriteria2});
      this.setState({feedbackCriteria3: res.data[0].feedbackCriteria3});
      this.setState({feedbackCriteria4: res.data[0].feedbackCriteria4});
      this.setState({feedbackCriteria5: res.data[0].feedbackCriteria5});
      this.setState({comments: res.data[0].comments});
      this.setState({suggestions: res.data[0].suggestions});
    });
  }
render()
{
    return ( 
 <Fragment>
   <div className="w-75 mx-auto shadow p-3"> <h1 className="text-center text-info">UPDATE FEEBACK FORM</h1>
  
   <Form onSubmit ={this.handleForm}>
   <FormGroup>
        <Label for="exampleText"><h5>Feedback ID</h5></Label>
        <Input type="textarea" name="text" id="exampleText 1 " value=
        {this.state.id} 
        onChange={(e)=>{
          this.setState({feedbackId:e.target.value});
        }}/>
      </FormGroup>
     
        <FormGroup>
        <Label for="How was Your experience with FeedbackCriteria1" ><h5>How was Your experience with Feedback Criteria 1</h5></Label>
        <Input type="select"
         name="select"
          id="exampleSelect1"
          value={this.state.feedbackCriteria1}
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
      <Label for="How was Your experience with FeedbackCriteria1"><h5>How was Your experience with Feedback Criteria 2</h5></Label>
        <Input type="select" name="select" id="exampleSelect2"
        value={this.state.feedbackCriteria2} 
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
      <Label for="How was Your experience with FeedbackCriteria3"><h5>How was Your experience with Feedback Criteria 3</h5></Label>
        <Input type="select" name="select" id="exampleSelect3"
        value={this.state.feedbackCriteria3} 
        onChange={(e)=>{
          this.setState({feedbackCriteria3:e.target.value});
        }}>
          <option></option>
          <option >1</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
          <option >5</option>
        </Input>
        <p>{this.state.feedbackCriteria3Error}</p>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria4"><h5>How was Your experience with Feedback Criteria 4  </h5></Label>
        <Input type="select" name="select" id="exampleSelect4"
        value={this.state.feedbackCriteria4}
        onChange={(e)=>{
          this.setState({feedbackCriteria4:e.target.value});
        }}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <p>{this.state.feedbackCriteria4Error}</p>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria5"><h5>How was Your experience with Feedback Criteria 5</h5></Label>
        <Input type="select" name="select" id="exampleSelect5" 
        value={this.state.feedbackCriteria5}
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
        <Label for="exampleText" class="mb-3"><h5>Comments</h5></Label>
        <Input type="textarea" name="text" id="exampleText" 
        placeholder="Enter the comments.."style={{height:100}}
        value={this.state.comments}
        onChange={(e)=>{
          this.setState({comments:e.target.value});
        }}  />
<p>{this.state.commentsError}</p>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText"><h5>Suggestions</h5></Label>
        <Input type="textarea" name="text" id="exampleText1" placeholder="Enter the suggestions.."style={{height:100}}
       value={this.state.suggestions}
       onChange={(e)=>{
          this.setState({suggestions:e.target.value});
        }}/>
        <p>{this.state.suggestionsError}</p>
      </FormGroup>
      <Container className="text-center">
        <Button type="submit" color="primary"  className="btn-lg">UPDATE</Button>
      </Container>
      <br/><br/><br/><br/>
        </Form>
        <br/><br/><br/><br/>
        </div>
        <br/><br/><br/><br/>
    </Fragment>
    
    );
      }
    }    

     export default UpdateFeedback
