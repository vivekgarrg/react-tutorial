import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={{ heigh: "fit-content", width: "fit-content", padding: "20px", border: "2px solid grey" }}>
                <h1>Count : {this.props.count}  </h1>
                <button onClick={() => this.props.handleClick()}>Add + </button>
            </div>
        )
    }
}
