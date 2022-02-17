import React, { Component } from "react";

class CharInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const info = this.props.charInfo;

        return (
            <div className="user-details">
                <ul>
                    <li>Height: {info.height}</li>
                    <li>Mass: {info.mass}</li>
                    <li>Created: {info.created}</li>
                    <li>Edited: {info.edited}</li>
                    <li>Planet Name: {info.homeworld}</li>
                </ul>
            </div>

        );
    }
}

export default CharInfo;