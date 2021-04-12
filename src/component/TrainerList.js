import React, { Component } from 'react'
import FacultyService from '../services/FacultyService'
import {Button} from "reactstrap";

class TrainerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addTrainer = this.addTrainer.bind(this);
        this.viewTrainer = this.viewTrainer.bind(this);
        this.updateTrainer321 = this.updateTrainer321.bind(this);
        this.removeTrainer = this.removeTrainer.bind(this);
    }

    removeTrainer(employeeId){
        FacultyService.removeTrainer(employeeId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeId !== employeeId)});
        });
    }
    viewTrainer(employeeId){
        this.props.history.push(`/view-trainer/${employeeId}`);

    }
    updateTrainer321(employeeId){
        this.props.history.push(`/update-trainer/${employeeId}`);
    }       

    componentDidMount(){
        FacultyService.viewAllTrainers().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addTrainer(){
        this.props.history.push('/add-trainer/_add');
    }

    render() {
        return (

            <div>
                 <h2 className="text-center">Trainers List</h2>
                 
                 <div className = "row" style={{marginLeft:100}}>
                    <button className="btn btn-primary" onClick={this.addTrainer}> Add Trainer</button>
                 </div>

                 <br></br>
                 <div className = "row" style={{width:'100%'}}>
                        <table className = "table table-striped table-bordered" style={{marginLeft:100,width:'100%'}}>

                            <thead>
                                <tr style={{backgroundColor:'black'}}>
                                    <th style={{color:'white'}}>Employee Id</th>
                                    <th style={{color:'white'}}> Employee Name</th>
                                    <th style={{color:'white'}}>Action</th>
                                   
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.employeeId}>
                                            <td> { employee.employeeId} </td>
                                             <td> { employee.employeeName} </td>   
                                            
                                            
                                             <td>
                                                 <button onClick={ () => this.updateTrainer321(employee.employeeId)} className="btn btn-success">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.removeTrainer(employee.employeeId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTrainer(employee.employeeId)} className="btn btn-info">View </button>
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

export default TrainerList