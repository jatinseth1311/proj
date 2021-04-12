import React, { Component } from 'react'
import FacultyService from '../services/FacultyService'

class ViewTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.id,
            employee: {}
        }
    }
l
    componentDidMount(){
        console.log(this.state.employeeId)
        FacultyService.viewTrainer(this.state.employeeId).then( res => {
            this.setState({employee: res.data});
            console.log(res.data)
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:'lightgrey'}}>
                    <h3 className = "text-center text-primary"> View Trainer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b> Trainer Name:</b> </label>
                            
                            <div className = "text-danger"><b> { this.state.employee.employeeName }</b></div>
                            <hr/>
                        </div>
                        <div className = "row">
                            <label> <b>Trainer Password: </b></label>
                             <div className = "text-danger"><b>
                                 { this.state.employee.password}</b></div>
                                 <hr/>
                        </div>
                   
                                  
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTrainer