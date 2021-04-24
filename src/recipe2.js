import './App.css';
import {
  BrowerRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import React from "react";


function Recipe2() {
  return (
    <div className="recipe2">
      <div className="sidenav">
      <Link to="/mondessertprefere" className="link">Home</Link>
      <Link to="/recipe1" className="link">Recipe 01</Link>
      <Link to="/recipe2" className="link">Recipe 02</Link>
      <Link to="/recipe3" className="link">Recipe 03</Link>
      </div>
      <div className="recipeheader">
      <div className="recipetext">
      <h1 className="recipetitle">Chocolate Chip Cookies</h1>
      <h2 className="recipedescription">My second favorite dessert are chocolate chip cookies. Chocolate chip cookies are regular cookie batter but with choclate chips added in. This recipe will make 4 dozen (48 cookies).</h2>
      </div>
      <div className="recipeimgsec">
      <img className="recipeimg"src="https://i.pinimg.com/564x/4f/96/ee/4f96ee7011d5eb459a6dacb49c5f09aa.jpg" alt="Choclate Chip Cookies"/>
      </div>
      </div>
      <div className="recipecontent">
    <div className="ingredientlist">
      <h3 className="ingredienttitle">Ingredients and Materials</h3>
      <div className="ingredienttext">
      <ul>- 1 cup of butter, softened</ul>
      <ul>- 1 cup of white sugar</ul>
      <ul>- 1 cup of brown sugar</ul>
      <ul>- 2 eggs</ul>
      <ul>- 2 teaspoons of vanilla extract</ul>
      <ul>- 2 teaspoons of hot water</ul>
      <ul>- 1 teaspoon of baking powder</ul>
      <ul>- 1/2 teaspoon of salt</ul>
      <ul>- 3 cups of all purpose flour</ul>
      <ul>- 2 cups of semisweet chocolate chips</ul>
      <ul>- parchement paper</ul>
      </div>
    </div>
    <div className="instructions2">
    <h3>Intructions</h3>
    <ul>01. Preheat oven to 350F degrees</ul>
    <ul>02. In a large bowl, cream together the butter, white sugar, and brown sugar till smooth</ul>
    <ul>03. Beat in eggs one at a time, when stir in the vanilla</ul>
    <ul>04. Dissolve baking soda in hot water and add to batter along with the salt</ul>
    <ul>05. Stir in flour and chocolate chips</ul>
    <ul>06. Line pan with parchment paper</ul>
    <ul>07. Roll large spoonfuls of batter and drop onto pan</ul>
    <ul>08. Let bake for 10 min or until edges are browned</ul>
  </div>
  </div>
  </div>
    
  );
}

export default Recipe2;