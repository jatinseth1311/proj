import React, { Component } from 'react'
import ProgramService from '../services/ProgramService'

class Viewprogram extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trainingId: this.props.match.params.trainingId,
            program: {}
        }
    }

    componentDidMount(){
        ProgramService.viewProgram(this.state.trainingId).then( res => {
            this.setState({program: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:'lightgrey'}} >
                    <h1 className = "text-center text-primary"> View Program Details</h1>
                    
                    <br/>
                    <br/>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b> Program Start Date:</b> </label>
                            
                            <div className = "text-danger"><b> { this.state.program.startDate }</b></div>
                            <hr/>
                        </div>
                        <br/>
                        <div className = "row">
                            <label> <b>Program End Date: </b></label>
                             <div className = "text-danger"><b>
                                 { this.state.program.endDate }</b></div>
                                 <hr/>
                        </div>
                   
                                  
                    </div>

                </div>
            </div>
        )
    }
}

export default Viewprogram