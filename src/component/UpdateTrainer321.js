import React, { Component } from 'react'
import FacultyService from '../services/FacultyService';

class UpdateTrainer321 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.id,
            employeeName: '',
            password: ''
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        FacultyService.viewTrainer(this.state.employeeId).then( (res) =>{
            let employee = res.data;
            this.setState({employeeName: employee.employeeName,
                password: employee.password,
                
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {employeeId: this.state.employeeId,employeeName: this.state.employeeName, password: this.state.password};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('employeeId => ' + JSON.stringify(this.state.employeeId));
        FacultyService.updateTrainer321(employee, this.state.employeeId).then( res => {
            this.props.history.push('/');
        });
    }
    
    changeEmployeeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/ ');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'lightgrey'}}>
                                <h3 className="text-center">Update Trainer</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Employee Name: </label>
                                            <input placeholder="Employee Name" name="employeeName" className="form-control" 
                                                value={this.state.employeeName} onChange={this.changeEmployeeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" type="password"
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTrainer321