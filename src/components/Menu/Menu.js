import Header from '../header/Header.components'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './menu.css';

const Menu = ({showSubMenu,setShowSubMenu,headerStyle,menuStyle,divStyle}) => {
    const address = `Harju maakond, Tallinn,
    Kesklinna linnaosa,
    Narva mnt 5, 10117`;

    let colorStyle = 'black';
    let color = colorStyle + 'Color';
    let text = colorStyle + 'Footer';
return(
    <div id='menu-div' style={divStyle?divStyle:{}}>
                <Header white={false} style={headerStyle} 
                showSubMenu={showSubMenu} setShowSubMenu ={setShowSubMenu}/>
                <div id='menu-content' style={menuStyle?menuStyle:{}}>
           <div id='contact-info' >
                <div id='address'>
                    <p className={'contact-title '+ color}>
                     Address
                    </p>
                    <p className={text} id='menu-address'>   {address}</p>
                
                </div>
                <div id='contacts'>
                    <p className={'contact-title ' + color}> Contacts </p>
                    <p className ={text}>+7 903 5544908</p>
                    <p className ={text}> info@helmda-systems.com</p>
                  
                </div>
                </div>
                <div id='conversation'>
                    <p id='start'>Start a conversation</p>
                    <p id='email'>info@heldma-systems.com</p>
                </div>
           <div id='link-list'>
             
               
                       <Link to='/' onClick={()=> setShowSubMenu(!setShowSubMenu)}>Home</Link>
                  
                       <Link to='/about' onClick={()=> setShowSubMenu(!setShowSubMenu)}>About</Link>
                
                       <HashLink smooth to='/#products-page' onClick={()=> setShowSubMenu(!setShowSubMenu)}>Products</HashLink>
                  
                       <Link to='/news' onClick={()=> setShowSubMenu(!setShowSubMenu)}>News</Link>
                
                   </div> 
                   </div>
    </div>
)
}
export default Menu;