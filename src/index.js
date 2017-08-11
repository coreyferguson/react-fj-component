import React from 'react';
export class HelloReactComponent extends React.Component {
    render() {
        return (
            <div>This is Hello!</div>
    );
    }
}
export default class Hello{
    constructor(elem){
        ReactDOM.render(  <HelloReactComponent />, elem)
    }
}