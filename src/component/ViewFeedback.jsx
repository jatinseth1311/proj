import React, { Component } from 'react'
import axios from 'axios'
class ViewFeedback extends Component {
    constructor(props) {
        super(props)
        
    this.state = {
             Feedback:[]
      }
        this.updateFeedback=this.updateFeedback.bind(this);
    }

   
    updateFeedback(id){
        this.props.history.push(`/update-feedback/${id}`);
    }
    componentDidMount(){
        axios.get("http://localhost:8004/fdbc/viewAllFeedback").then((res) => {
            this.setState({Feedback: res.data});
            console.log(res);
        });
        
    }

    render() {
        return (
            <div>
                 <br></br>
                 <div className = "py-4">
                     <h1 className="text-center text-info">FEEDBACK LIST</h1><hr/>
                        <table className = "table table-striped table-bordered">
                            <thead class="thead-dark" align="center">
                                <tr>
                                    <th > Feedback id</th>
                                    <th> feedbackCriteria 1</th>
                                    <th> feedbackCriteria 2</th>
                                    <th> feedbackCriteria 3</th>
                                    <th> feedbackCriteria 4</th>
                                    <th> feedbackCriteria 5</th>
                                    <th> comments</th>
                                    <th> suggestions</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    this.state.Feedback.map(
                                        Feedback => 
                                        <tr key = {Feedback.feedbackId}>
                                             <td> {Feedback.feedbackId} </td>   
                                             <td> {Feedback.feedbackCriteria1}</td>
                                             <td> {Feedback.feedbackCriteria2}</td>
                                             <td> {Feedback.feedbackCriteria3}</td>
                                             <td> {Feedback.feedbackCriteria4}</td>
                                             <td> {Feedback.feedbackCriteria5}</td>
                                             <td> {Feedback.comments}</td>
                                             <td> {Feedback.suggestions}</td>
                                             <td>
                                                 <button  className="btn btn-primary" onClick={() => this.updateFeedback(Feedback.feedbackId)}>Update </button>
                                               
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}

export default ViewFeedback;