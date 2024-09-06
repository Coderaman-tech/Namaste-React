import React from "react";
import ReactDOM from "react-dom";

 const Title=()=>{
    return(
    <h1 id="title" key="h1">
        Namaste React
    </h1>
    );
 }

 const HeaderComponent=()=>{
    return(
        <div>
            {1+1}
        <Title/>
        <h2>Namaste React Functional Component</h2>
        <h2>This is h2 tag</h2>
        </div>

    );
 }

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
