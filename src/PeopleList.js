import React from "react";


export default function PeopleList({ people }) {
    return (
      <div>
        {people.map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
    );
}


// class List extends Component {
//     render() {
//         const people = this.props.people;

//         return (
//             <div className="">
//                 <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>Height</th>
//                         <th>Mass</th>
//                         <th>Created</th>
//                         <th>Edited</th>
//                     </tr>
//                     {
//                         people.map((p) => {
//                             console.log(p)

//                             // displays the characters 
//                             return (

//                                 <div key={p.url}>
//                                     <CharInfo charInfo={p} />
//                                 </div> 
//                             )
//                         })
//                     }
//                 </table>
//             </div>
//         );
//     }
// }

// export default List;
