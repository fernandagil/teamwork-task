import React, { Component } from "react";

class List extends Component {
    render() {
        const people = this.props.people;

        return (
            <div className="">
                {
                    people.map((p) => {
                        console.log(p)
                    })
                }
            </div>
        );
    }
}

export default List;
