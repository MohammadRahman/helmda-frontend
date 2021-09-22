import Rectangle from '../../images/svg/rectangle';
import {defaultState} from '../../server/defaultState';
import './textBlock.css';

const TextBlock = (id) => { 
    let title = '';
    let content = ``;
    defaultState.texts.forEach(obj=> {
        if(obj.id === id.id) {
            title = obj.title;
            content = obj.content;
            console.log(content);
        }
    })
    return(
    <div id = {id.id}>
        <div id='title-div'>
    <h1>{title}</h1>
     </div>
    <div id='content-div'>
    <Rectangle />
    <div>
    {content.map(item=><><br /><p>{item}</p> </>)}
    </div>
          </div> 
      </div>
);

}

export default TextBlock;