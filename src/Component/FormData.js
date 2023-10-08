import React, { Component } from 'react'

export class FormData extends Component {
    render() {
        return (
            <div id='empData'>
                <h2 id="head">EMPLOYEE FEEDBACK DATA</h2>
                <div id='box'>
                    {this.props.value.map((item, index) => {
                        return (
                            <div id="data" key={index}>
                                <span><b>Name :</b> {item.name}</span>
                                <span><b>Department :</b> {item.dept}</span>
                                <span><b>Rating :</b> {item.rating}</span>
                            </div>
                        )
                    })}
                </div>
                <button id='btn' onClick={this.props.fun}>Go Back</button>
            </div>
        )
    }
}
