import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
        }
    }


    render() {
        const {people} = this.state;
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
