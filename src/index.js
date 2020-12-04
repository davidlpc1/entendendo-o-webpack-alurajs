import React from 'react';
import ReactDOM from 'react-dom';

const myName = "Davi";

ReactDOM.render(
    <div>Nome : {myName}</div>,
    document.querySelector('#app')
)

console.log("Worked everthing together")