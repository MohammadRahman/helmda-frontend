import {defaultState} from '../../server/defaultState';
import './person.css'

const Person = (id) => {

    let role = '';
    let name = '';
    let src = '';

    defaultState.people.forEach(person=>{
        if(person.id === id.id) {
            role = person.role;
            name = person.name;
            src = person.src;
        }

    })
    return(
        <div id = {id.id}>
    <img src= {src} alt={id.id} />
    <div>
    <strong id='name'>{name}</strong>
    <p id='role'>{role}</p>
    </div>
      </div>
    )
}

export default Person;