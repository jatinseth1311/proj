import React, { Component } from 'react'
import ProgramService from '../services/ProgramService';

class Createprogram extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            trainingId: '_add',
            startDate: '',
            endDate: ''
        };
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.saveOrUpdateProgram = this.saveOrUpdateProgram.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.trainingId === '_add'){
            return
        }else{
            ProgramService.viewProgram(this.state.trainingId).then( (res) =>{
                let program = res.data;
                this.setState({startDate: program.startDate,
                    endDate: program.endDate
                });
            });
        }        
    }
    saveOrUpdateProgram = (e) => {
        e.preventDefault();
        let program = {startDate: this.state.startDate, endDate: this.state.endDate};
        console.log('program => ' + JSON.stringify(program));

        // step 5
        if(this.state.trainingId === '_add'){
            console.log("add");
            ProgramService.createProgram(program).then(res =>{
                this.props.history.push('/');
            });
        }else{
            console.log("update");
            ProgramService.updateProgram(program, this.state.trainingId).then( res => {
                this.props.history.push('/');
            });
        }
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

    getTitle(){
        if(this.state.trainingId === '_add'){
            return <h3 className="text-center">Add Program</h3>
        }else{
            return <h3 className="text-center">Update Program</h3>
        }
    }
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row" >
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'lightgrey'}}>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="yyyy-mm-dd" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeStartDateHandler}/><br/>
                                        </div>
                                        <br/>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="yyyy-mm-dd" name="endDate" className="form-control" 
                                                value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                        </div>
                                        <br/>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProgram}>Save</button>
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


export default Createprogram