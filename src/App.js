import "./App.css";
import React,{Suspense,useState} from 'react';
import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Privacy from "./components/Privacy/Privacy";
import Submenu from "./components/submenu/Submenu.compunents";
import "aos/dist/aos.css";
import SendEmail from "./SendEmail.component";
import Subscribe from "./Subscribe.components";
import GetInTouch from "./components/get-in-touch/GetInTouch.component";
import Form from "./components/form/Form.component";
import Homepage from './pages/homepage/Homepage.components';
import NewsPage from './pages/NewsPage/NewsPage';

//const Homepage = React.lazy(()=>import('./pages/homepage/Homepage.components'))

const App = () => {
  const [showMenu,setShowMenu] = useState(false);

  return (

    <div id="app-div">
      <Switch>
       
        <Route exact path="/" component={Homepage} />
        <Route exact path="/mail" component={SendEmail} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path='/news' showMenu={showMenu} setShowMenu={setShowMenu} component={NewsPage} />
        <Route exact path="/get-in-touch" component={GetInTouch} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/submenu" component={Submenu} />
        <Route exact path="/form" component={Form} />

      </Switch>
    </div>
  );
};

export default App;
