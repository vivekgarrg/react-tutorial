import React, { Component } from 'react'
import Card from './Card';

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log('constructor');
    }
    componentDidMount() {
        console.log('Componenet Mounted');
    }
    componentDidUpdate() {
        console.log('COmponenet Updated');
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Body </h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        )
    }
}


//Three life cycle methods
// 1. ComponenetDidMount
// 2. ComponentDidUpdate
// 3. ComponentDidUnmount