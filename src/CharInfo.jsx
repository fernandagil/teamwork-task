import React, { Component } from "react";

class CharInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const info = this.props.charInfo;

        return (
            <tr className="user-details">
                <td>{info.name}</td>
                <td>{info.height}</td>
                <td>{info.mass}</td>
                <td>{info.created}</td>
                <td>{info.edited}</td>
            </tr>
        );
    }
}

export default CharInfo;