import './App.css';
import {
  BrowerRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import React from "react";


export default function Recipe1() {
  return (
    <div className="recipe1">
    <div className="sidenav">
   <Link to="/mondessertprefere" className="link">Home</Link>
   <Link to="/recipe1" className="link">Recipe 01</Link>
   <Link to="/recipe2" className="link">Recipe 02</Link>
   <Link to="/recipe3" className="link">Recipe 03</Link>
  </div>
    <div className="recipeheader">
    <div className="recipetext">
    <h1 className="recipetitle">Coffee Macarons</h1>
    <h2 className="recipedescription">My first favorite dessert are coffee macarons. Coffee macarons consists of a basic macaron shell (which is basically an almond meringue) and coffee and white chocolate ganache as the filling. The recipe below will make 20 macarons.</h2>
    </div>
    <div className="recipeimgsec">
    <img className="recipeimg" src="https://i.pinimg.com/originals/45/cd/50/45cd500e59a73630fe6e2f4b7f89a1bf.jpg" alt="Coffee Macarons"/>
    </div>
    </div>
    <div className="ingredientlist">
      <h3 className="ingredienttitle">Ingredients and Materials</h3>
      <div className="ingredienttext">
      <h4 className="ingredientsubtitle">Coffee Ganache</h4>
      <ul>- 66.67g of white chocolate chips</ul>
      <ul>- 50g heavy cream</ul>
      <ul>- 13.33g unsalted butter (melted)</ul>
      <ul>- 0.33tbsp of instant coffee</ul>
      
      <h4 className="ingredientsubtitle">Coffee Macarons</h4>
      <ul>- 70.67g almond flour</ul>
      <ul>- 70.67g powdered sugar</ul>
      <ul>- 57.33g egg whites</ul>
      <ul>- 0.33tbsp of granulated sugar</ul>
      <ul>- 0.33tbsp of instant coffee</ul>
      <ul>- 78.67g granulated sugar</ul>
      <ul>- 52.67g water</ul>

      <h4 className="ingredientsubtitle">Equipment</h4>
      <ul>- 18inch pastry bag</ul>
      <ul>- Round pastry tip</ul>
      <ul>- Baking Sheet (15" x 21")</ul>
      <ul>- Parchment Paper or Silicone Mat</ul>
      </div>
    </div>
    <div className="instructions1">
      <h3>Instructions</h3>
      <h4>Coffee Ganache</h4>
      <ul>01. Add 66.67g of white chocolate chips to a meduim bowl</ul>
      <ul>02. Heat up 50ml of heavy whipping cream and 0.33tbsp of instant coffee until almost boiling. Stit until coffee is dissolved</ul>
      <ul>03. Pour hot coffee and heavy cream mixture over the white chocolate chips. Let the mixture sit for 1 minute, then stir till smooth.</ul>
      <ul>04. Whisk in 13.33g of room temp. butter into the mixture until smooth</ul>
      <ul>05. Cool at room temp, then refrigerate until pipable consistency and thick.</ul>
      
      <h4>Macaron Shells</h4>
      <ul>01. Mix 57.67g of water and 78.67g of granualted sugar over meduim heat inorder to create the syrup. Mix gently until sugar is dissolved. Cook until mixture reaches 248F degrees and remove from stove immediaetly.</ul>
      <ul>02. Sift the almond flour and powered sugar twice into a large bowl.</ul>
      <ul>03. Heat the eggwhites in the mircowave in 5-7sec intervals, sirring in between, for about 30 seconds until barely warm to the touch</ul>
      <ul>04. Add 27.33g of the egg whites to the sifted almond flour and sugar mixture. Pour the rest into a grease-free mixer bowl, add 0.33tbsp of instant coffee, and set aside</ul>
      <ul>05. When the syrup reaches 240F, mix the bowl with the sifted ingredients and egg whites until a thick paste forms.</ul>
      <ul>06. When the syrup reaches 243F - 244F, whip the egg white and instant coffee mixture on meduim speed.</ul>
      <ul>07. When the egg white mixture is foamy and the sryup reaches 248 degrees, increase mixer speed to high and slowly pour syrup into bowl. Continue mixing until stiff peaks appear.</ul>
      <ul>08. Fold both mixtures (almond flour + sugar and syrup + egg white) until the batter can flow off the spatula and into the bowl.</ul>
    
    <h4>Piping The Shells and Baking</h4>
    <ul>01. Line two 15in x 21in baking sheets with either parchment paper or a silicone baking mat</ul>
    <ul>02. Preheat oven to 350F</ul>
    <ul>03. Fit pastry baf with your round tip and fill with macaron batter</ul>
    <ul>04. Pipe 1.5in round circles, 1.5 in apart on the baking sheet</ul>    
    <ul>05. Tap sheet against counter 5-7 times, then rotate and repeat. Pop any air bubbles with a toothpick.</ul>
    <ul>06. Place sheet into oven and lower temp to 325F. Bake for 10-12mins and let completely cool. Do not remove shells until completely cool and repeat baking with the next sheet</ul>
    

    <h4>Filling and Storing the Macarons</h4>
    <ul>01. Fill pipping bag with chocolate ganache</ul>
    <ul>02. Pair macaron shells by size, and pipe a tablesppon of filling onto one half, then press together with other half until filling almost reaches the edges</ul>
    <ul>03. Refrigerate in an airtight container for 24hours before consuming</ul>
    <ul>04. Wrap each macaron shell in plastic wrap if you do not plan on eating right away and freeze until ready to eat. Make sure to bring the macarons to room temp. before consuming</ul>
    </div>
    </div>
  );
}

