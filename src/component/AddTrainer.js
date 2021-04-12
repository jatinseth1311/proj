import React, { Component } from 'react'
import FacultyService from '../services/FacultyService';

class AddTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            employeeId: '_add',
            employeeName: '',
            password: ''
        };
        this.changeemployeeNameHandler = this.changeemployeeNameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.employeeId === '_add'){
            return
        }else{
            FacultyService.viewTrainer(this.state.employeeId).then( (res) =>{
                let employee = res.data;
                this.setState({employeeName: employee.employeeName,
                    password: employee.password,
                    
                });
            });
        }        
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        
        let employee = {employeeName: this.state.employeeName, password: this.state.password};
        console.log(this.state.employeeName + "  " + this.state.password);
        console.log('employee => ' + JSON.stringify(employee));

        
        if(this.state.employeeId === '_add'){
            console.log("add");
            FacultyService.addTrainer(employee).then(res =>{
                this.props.history.push('/');
            });
        }else{
            console.log("update");
            FacultyService.updateTrainer321(employee, this.state.employeeId).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeemployeeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.employeeId === '_add'){
            return <h3 className="text-center">Add Trainer</h3>
        }else{
            return <h3 className="text-center">Update Trainer</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'lightgrey'}}>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Trainer Name: </label>
                                            <input placeholder="Trainer Name" name="employeeName" className="form-control" 
                                                value={this.state.employeeName} onChange={this.changeemployeeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" type="password"
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default AddTrainer