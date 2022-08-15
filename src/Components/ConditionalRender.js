import React, { Component } from 'react'

export default class ConditionalRender extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false,
            user: null,
        }
    }

    handleLogIn = () => {
        this.setState({
            user: "vivek",
            isLogin: true
        })
    }
    handleLogOut = () => {
        this.setState({
            isLogin: false,
            user: null
        })
    }

    render() {
        //Destructuring
        const { isLogin, user } = this.state;

        //define empty element
        let ele;

        //conditional rendering:
        if (isLogin && user) {
            ele = <div>
                <h1>Loggen in Successfull</h1>
                <h2>User : {user}</h2>
                <button onClick={this.handleLogOut}>Log out</button>
            </div>
        } else {
            ele = <div>
                <h1>User not logged in, Please Login.</h1>
                <button onClick={this.handleLogIn}>Log in</button>
            </div>
        }

        return (
            <div>{ele}</div>
        )
    }
}
