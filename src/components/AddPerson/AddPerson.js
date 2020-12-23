import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    
    render() {
        return (
            <div className="AddPerson">
                <button
                    onClick={() =>
                        this.props.personAdded()
                    }
                >
                    Add Person
                </button>
            </div>
        );
    }
}

export default AddPerson;
