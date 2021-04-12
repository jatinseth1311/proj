import React, { Component } from 'react'
import { FaRProject } from 'react-icons/fa'
import ProgramService from '../services/ProgramService'
import {Button} from "reactstrap";
import {
    Redirect
  } from "react-router-dom";


class ProgramsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                programs: []
        }
        this.addProgram = this.addProgram.bind(this);
        this.updateProgram = this.updateProgram.bind(this);
        this.deleteProgram = this.deleteProgram.bind(this);
    }

    deleteProgram(trainingId){
        console.log("hello");
        ProgramService.deleteProgram1(trainingId).then( res => {
            this.setState({programs: this.state.programs.filter(program => program.trainingId !== trainingId)});
        });
    }

    viewProgram(trainingId){
        this.props.history.push(`/view-program/${trainingId}`);
    }

    updateProgram(trainingId){
        this.props.history.push(`/update-program/${trainingId}`);
    }

    componentDidMount(){
        ProgramService.showAllPrograms().then((res) => {
            this.setState({ programs: res.data});
        });
    }

    addProgram(){
       this.props.history.push('/add-program/trainingId');
      console.log(this.props);
    }

    render() {
        return (
            <div className="text-center">
                 <h1 className="text-center">Programs List</h1>
                 
                 <br/>
                 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProgram} style={{marginLeft:100}}> Add Program </button>
                   
                 </div>
                 <br/><br/>
                 <div className = "row" p-5>
                        <table className = "table table-striped table-bordered" ml-5 style={{width:"1100px",height:"10px",marginLeft:100}}>

                            <thead>
                                <tr style={{backgroundColor:'black'}}>
                                    <th style={{color:'white'}}>Program Start Date</th>
                                    <th style={{color:'white'}}> Program End Date</th>          
                                    <th style={{color:'white'}}> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.programs.map(
                                        program => 
                                        <tr key = {program.trainingId}>
                                             <td> {program.startDate} </td>   
                                             <td> {program.endDate}</td>
                                            
                                             <td>
                                                 <button onClick={ () => this.updateProgram(program.trainingId)} className="btn btn-success">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProgram(program.trainingId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProgram(program.trainingId)} className="btn btn-info">View </button>
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

export default ProgramsList
