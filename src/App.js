import React, { Component } from 'react';
import List from './List';
import axios from 'axios';


// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             people: [],
//         }

//         this.getPeople = this.getPeople.bind(this);
//     }

//     getPeople() {
//         return axios.get('https://swapi.dev/api/people')
//         .then((response) => {
//             console.log(response.data.results);
//             this.setState( { people: response.data.results } );
//         });
//     }

//     componentDidMount() {
//         this.getPeople()
//     }


//     render() {
//         const {people} = this.state;
//         return (
//             <div className='App'>
//                 <List people={people} />
//             </div>
//         );
//     }
// }

// export default App;


// search people

let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let created = document.querySelector('#created');
let edited = document.querySelector('#edited');
let homeworld = document.querySelector('#homeworld');

function getInfo() {

    let randomNumber = Math.floor((Math.random() * 88) + 1);
    let apiUrl = 'https://swapi.dev/api/people/' + randomNumber;

    axios.get(apiUrl).then(function(response){
        updateInfo(response.data);
    }).catch(e => {
        updateInfoWithError(); 
    });
}

function updateInfo(data) {
    name.innerText = data.name;
    height.innerText = data.height;
    mass.innerText = data.mass;
    created.innerText = data.created;
    edited.innerText = data.edited;
    homeworld.innerText = data.homeworld;
}

function updateInfoWithError() {
    name.innerText = 'That person is not available';
    height.innerText = '';
    mass.innerText = '';
    created.innerText = '';
    edited.innerText = '';
    homeworld.innerText = '';
}

button.addEventListener('click', getInfo);
