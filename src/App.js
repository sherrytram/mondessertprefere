import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import SideNav from './SideNav';
import Recipe1 from './recipe1';
import Recipe2 from './recipe2';
import Recipe3 from './recipe3';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/recipe1"><Recipe1/></Route>
        <Route exact path="/recipe2"><Recipe2/></Route>
        <Route exact path="/recipe2"><Recipe3/></Route>
      </Switch>
    </Router>
  )
}


function Home() {
  let history = useHistory();
  return (
    <div className="App">
      <div className="welcometext">
        <h1 className="title">Mon Dessert Préféré</h1>
        <h2 className="description">Hi there! Welcome to Mon Dessert Préféré. Here you'll be able to learn how to make my top three favorite desserts: Coffee Macarons, Cheesecake, and Chocolate Chip Cookies. I hope you enjoy baking and eating these desserts as much as I do! <br/><br/> Recipe 01 will bring you to the recipe for coffee macarons. Recipe 02 will bring you to the recipe for cheesecake, and Recipe 03 will bring you to the recipe for Chocolate Chip Cookies. </h2>
        <SideNav/>
        <div className="buttondiv">
        <button className="navbuttons" onClick={() => history.push('/recipe1')}>Recipe 01</button>
        <button className="navbuttons" onClick={() => history.push('/recipe2')}>Recipe 02</button>
        <button className="navbuttons" onClick={() => history.push('/recipe3')}>Recipe 03</button>
        </div>
        </div>
        <div className="welcomeimages">
        <img className="homeimages" src="https://i.pinimg.com/originals/45/cd/50/45cd500e59a73630fe6e2f4b7f89a1bf.jpg" alt="Coffee Macarons"/>
        <img className="homeimages" src="https://i.pinimg.com/564x/4f/96/ee/4f96ee7011d5eb459a6dacb49c5f09aa.jpg" alt="Choclate Chip Cookies"/>
        <img className="homeimages" src="https://data.whicdn.com/images/317268829/original.jpg" alt="Cheesecake"/>
        </div>
    </div>
  );
}





