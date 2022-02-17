import React, { Component } from "react";
import CharInfo from './CharInfo';

class List extends Component {
    render() {
        const people = this.props.people;

        return (
            <div className="">
                {
                    people.map((p) => {
                        console.log(p)

                        // displays the characters 
                        return (
                            <div key={p.url}>
                                <h2 className="char-name">{p.name}</h2>
                                <CharInfo charInfo={p} />
                            </div> 
                        )
                    })
                }
            </div>
        );
    }
}

export default List;
