import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from 'react-redux';
import * as actnType from '../store/actions';

class Persons extends Component {

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAdd} />
        {this.props.prsns.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDel(person.id)}
          />
        ))}
      </div>
    );
  }
}


const mapStateToProps = state =>{
   return {
       prsns: [...state.persons]
   } 
}

const mapDispatchToProps = dispatch => {
    return{
    personAdd: (name, age) => dispatch({type:actnType.ADD, person:{name:name, age:age}}),
    personDel: (id) => dispatch({type:actnType.DELETE, personid: id})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
