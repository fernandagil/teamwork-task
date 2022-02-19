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
                            <tr key={p.url}>
                                <CharInfo charInfo={p} />
                            </tr> 
                        )
                    })
                }
            </div>
        );
    }
}

export default List;
