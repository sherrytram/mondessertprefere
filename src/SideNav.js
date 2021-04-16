import React from "react";
import "./App.css";

const SideNav = (props) => {

return (
<div className="sidenav" style={{width: props.width}}>
   <a className="link" href="/app.js/">home</a>
   <a className="link" href="/recipe1/">01</a>
   <a className="link" href="/recipe2/">02</a>
   <a className="link" href="/recipe3">03</a>
</div>
 );
};
export default SideNav; 