import React, { Component } from 'react'
import Card from './Card';

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Add +</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Minus -</button>
                <Card count={this.state.count} handleClick={this.handleClick} />
            </div>
        )
    }
}


