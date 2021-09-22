import {defaultState} from '../../server/defaultState';
import './value.css';

const Value= (id) => { 
    let title = '';
    let content = '';
    defaultState.values.forEach(obj=> {
        if(obj.id === id.id) {
            title = obj.title;
            content = obj.content;
        }
    })
    return(
    <div id = {id.id}>
        <div id='value-title-div'>
    <h3>{title}</h3>
     </div>
    <div id='value-content-div'>
    <p>{content}</p>
      </div>
      </div>
);

}

export default Value;