import * as actnType from '../actions';

const initialState = {
    persons:[]
}


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actnType.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: "Max",
                age: Math.floor(Math.random() * 40)
              };
              return {
                  persons: state.persons.concat(newPerson) 
              };
        case actnType.DELETE:
            return {
                persons: state.persons.filter(person => person.id !== action.personid)
              };
    }
    return state
}

export default reducer;