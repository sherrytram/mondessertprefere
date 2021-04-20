import React from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useHistory,
 } from "react-router-dom";



export default function SideNav(){
return (
<div className="sidenav">
   <Link to="/mondessertprefere" className="link">Home</Link>
   <Link to="/recipe1" className="link">Recipe 01</Link>
   <Link to="/recipe2" className="link">Recipe 02</Link>
   <Link to="/recipe3" className="link">Recipe 03</Link>
</div>
 );
};
