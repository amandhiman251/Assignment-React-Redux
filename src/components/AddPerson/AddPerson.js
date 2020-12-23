import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state={
        name:'',
        age:''
    }
    
    nameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageHandler = (event) => {
        this.setState({age: event.target.value});
    }



    render() {
        return (
            <div className="AddPerson">
                <input 
                type='text' 
                placeholder ="Name" 
                value={this.state.name}
                onChange={this.nameHandler}/>

                <input 
                type='number' 
                placeholder ="Age" 
                value={this.state.age}
                onChange={this.ageHandler}/>
                <button
                    onClick={() => this.props.personAdded(this.state.name, this.state.age)}>
                    Add Person
                </button>
            </div>
        );
    }
}

export default AddPerson;
