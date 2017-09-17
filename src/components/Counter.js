import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: ++this.state.counter
        });
    }

    decrement = () => {
        this.setState({
            counter: --this.state.counter
        });
    }

    counterView = () => {
        const style = {
            color: this.state.counter >= 10 ? 'red' : 'black',
            fontSize: this.state.counter >= 10 ? '16px' : '10px'
        }
        return (
            <div style={{height: '50px', padding:'5px'}}>
            <h1 style={style}>Hello from react {this.state.counter}</h1>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.counterView()}
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Sub</button>
            </div>
        );
    }
}