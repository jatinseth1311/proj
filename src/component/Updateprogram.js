import React, { Component } from 'react'
import ProgramService from '../services/ProgramService';

class Updateprogram extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trainingId: this.props.match.params.id,
            startDate: '',
            endDate: ''
           
        }
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.updateProgram = this.updateProgram.bind(this);
    }

    componentDidMount(){
        ProgramService.viewProgram(this.state.trainingId).then( (res) =>{
            let program = res.data;
            this.setState({startDate: program.startDate,
                endDate: program.endDate
                
            });
        });
    }

    updateProgram = (e) => {
        e.preventDefault();
        let program = {startDate: this.state.startDate, endDate: this.state.endDate};
        console.log('program => ' + JSON.stringify(program));
        console.log('trainingId => ' + JSON.stringify(this.state.trainingId));
        ProgramService.updateProgram(program, this.state.trainingId).then( res => {
            this.props.history.push('/');
        });
    }
    
    changeStartDateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }

    changeEndDateHandler= (event) => {
        this.setState({endDate: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'lightgrey'}}>
                                <h3 className="text-center">Update Program</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="Start Date" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="End Date" name="endDate" className="form-control" 
                                                value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateProgram}>Save</button>
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

export default Updateprogram