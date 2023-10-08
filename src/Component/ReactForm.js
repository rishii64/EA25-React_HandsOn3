import React, { Component } from "react";
import { FormData } from "./FormData";
class ReactForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            dept: '',
            rating: '',
            error : {},
            nmErr: false,
            dptErr: false,
            rtErr: false,
            disp : true,
            stuData: []
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    back = ()=> this.setState({disp : true})
    handleSubmit = () => {
        if(!this.state.name){
            this.setState({nmErr : true})
        }
        else if(!this.state.dept){
            this.setState({dptErr: true})
        }
        else if(!this.state.rating || parseInt(this.state.rating) < 1 || parseInt(this.state.rating) > 5){
            this.setState({rtErr : true})
        }
        else{
            const tempObj = {
                name: this.state.name,
                dept: this.state.dept,
                rating: this.state.rating
            }
            this.state.stuData.push(tempObj)
            this.setState({
                name: '',
                dept: '',
                rating: '',
                nmErr: false,
                dptErr: false,
                rtErr: false,
                stuData: this.state.stuData,
                disp : !this.state.disp
            })
        }
    }
    render() {
        return (
            <div id="main">
                {
                    this.state.disp ?
                    <>
                        <form className="form" onSubmit={(e)=>e.preventDefault()}>
                            <h1 id="head">EMPLOYEE FEEDBACK FORM </h1>
                            <div className="info">
                                <label>Name : </label>
                                <input type='text' name='name' value={this.state.name} placeholder="Enter Your Name" onChange={this.handleChange} /> <br />
                                {this.state.nmErr && <p>Please fill your name</p>}                        
                            </div>                      
                                {/* {this.state.nmErr ? <p>Please fill your name</p> : null} */}
                            <div className="info">
                                <label>Department : </label>
                                <input type='text' name='dept' value={this.state.dept} placeholder="Enter your Department" onChange={this.handleChange} /> <br /> 
                                {this.state.dptErr && <p>Please fill your department</p>}
                            </div>
                                
                            <div className="info">
                                <label>Rating : </label>
                                <input type='number' name='rating' value={this.state.rating} placeholder="Enter your rating" onChange={this.handleChange} /> <br />
                                {this.state.rtErr && <p>Provide rating between 1 to 5</p>}
                            </div>
                            <button id="btn" onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </>
                    :
                    <FormData value={this.state.stuData} fun={this.back} />
                }
            </div>
        )
    }
}
export default ReactForm

