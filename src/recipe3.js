import './App.css';
import {
  BrowerRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import React from "react";
import SideNav from "./SideNav";

function Recipe3() {
  return (
    <div className="recipe3">
      <SideNav />
      <div className="recipeheader">
      <div className="recipetext">
      <h1 className="recipetitle">Cheesecake</h1>
      <h2 className="recipedescription">My third favorite dessert is Cheesecake. Cheesecake is a creamy cheese and sugar mixture atop a graham cracker crust. This recipe will make one full cheesecake with 12 slices.</h2>
      </div>
      <div className="recipeimgsec">
      <img className="recipeimg" src="https://data.whicdn.com/images/317268829/original.jpg" alt="Cheesecake"/>
      </div>
      </div>
      <div className="ingredientlist">
        <h3 className="ingredienttitle">Ingredients and Materials</h3>
        <div className="ingredienttext">
        <h4 className="ingredientsubtitle">Graham Cracker Crust</h4>
        <ul>- 1 1/2cups of graham cracker crumbs</ul>
        <ul>- 2tbsp of sugar</ul>
        <ul>- 1tbsp of brown sugar</ul>
        <ul>- 7tbsp of melted butter</ul>
      
        <h4 className="ingredientsubtitle">Cheesecake</h4>
        <ul>- 32oz of cream cheese softened to room temperature</ul>
        <ul>- 1 cup of sugar</ul>
        <ul>- 2/3 cups of sour cream</ul>
        <ul>- 1 1/2 teaspoons of vanilla extract</ul>
        <ul>- 1/8 teaspoon of salt</ul>
        <ul>- 4 large eggs, room temp, lightly beaten</ul>

        <h4 className="ingredientsubtitle">Materials</h4>
        <ul>- 9" springform pan</ul>
        <ul>- mixing bowls</ul>
        </div>
      </div>
      <div>
        <h3>Instructions</h3>
        <h4>Graham Cracker Crust</h4>
        <ul>01. Preheat oven to 325F degrees</ul>
        <ul>02. Combine graham cracker crumbs, sugar, and brown sugar, and stir well</ul>
        <ul>03. Add  melted butter to the mixture. Use a fork to combine ingredients well.</ul>
        <ul>04. Pour mixture into springform pan and press firmly into the bottom and sides of the pan. Set aside for later</ul>

        <h4>Cheesecake</h4>
        <ul>01. Mix creamcheese with a stand mixer or hand mixer until smooth and creamy. Make sure to not overbeat or you'll be incorporating to much air.</ul>
        <ul>02. Add sugar and stir until creamy</ul>
        <ul>03. Add sour cream, vanilla extract, and salt. Stir until well combined and evenly incorporated</ul>
        <ul>04. Set the mixer speed to low and gradually add in beaten eggs one at a time. Mix batter until all ingredients are well combined</ul>
        <ul>05. Pour the batter into the springform pan with the crust at the bottom. Place the pan on a baking sheet lined with foil to insure leaks</ul>
        <ul>06. Bake in oven for 75 mintues (1hr and 15min) at 325F degrees. The edges will be slightly puffed/turn golden brown, and the cneter should be a bit springy</ul>
        <ul>07. Remove from oven and cool for 10 mintues. After the 10mins, loosen crust with knife to prevent cracks later on when your cheesecake cools and shrinks</ul>
        <ul>08. Allow cheesecake to cool for another 1-2 hours at room temp. Transfer to refrigerator and let cool for another 6 hours/overnight before consuming</ul>
      </div>
      <p>Enjoy!</p>
    </div>
  );
}

export default Recipe3;