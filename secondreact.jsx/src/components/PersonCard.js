import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
   
    handleClick = () => {
        this.setState({age: this.state.age + 1});
    }
   
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button onClick = {this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;