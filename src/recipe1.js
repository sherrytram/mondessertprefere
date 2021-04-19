import './App.css';
import {
  BrowerRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import React from "react";
import SideNav from "./SideNav"

export default function Recipe1() {
  return (
    <div>
    <SideNav/>
    <h1>Coffee Macarons</h1>
    <h2>My first favorite dessert are coffee macarons. Coffee macarons consist of a basic macaron shell (which is basically an almond meringue) and coffee and white chocolate ganache as the filling. The recipe below will make 20 macarons</h2>
    <div>
      <h3>Ingredients and Materials</h3>
      <h4>Coffee Ganache</h4>
      <ul>- 66.67g of white chocolate chips</ul>
      <ul>- 50g heavy cream</ul>
      <ul>- 13.33g unsalted butter (melted)</ul>
      <ul>- 0.33tbsp of instant coffee</ul>
      
      <h4>Coffee Macarons</h4>
      <ul>- 70.67g almond flour</ul>
      <ul>- 70.67g powdered sugar</ul>
      <ul>- 57.33g egg whites</ul>
      <ul>- 0.33tbsp of granulated sugar</ul>
      <ul>- 0.33tbsp of instant coffee</ul>
      <ul>- 78.67g granulated sugar</ul>
      <ul>- 52.67g water</ul>

      <h4>Equipment</h4>
      <ul>- 18inch pastry bag</ul>
      <ul>- Round pastry tip</ul>
      <ul>- Baking Sheet (15" x 21")</ul>
      <ul>- Parchment Paper or Silicone Mat</ul>
    </div>
    
    </div>
  );
}

