import React,{useRef,useState} from "react";
import ReactDOM from "react-dom/client";

 const Title=()=>{
    return(
    <h1 id="title" key="h1">
        Namaste React
    </h1>
    );
 }


 
 const HeaderComponent=()=>{
     const x = useRef(0);
    const [change, setChange] = useState(true);
    const handleClick=()=>{
        x.current+=1;
    }

    const changeState=()=>{
        setChange(!change);
    }
    return(
        <div>
            {1+1}
        <Title/>
        <h2>Namaste React Functional Component</h2>
        <h2>This is h2 tag</h2>


        <div>
            <p>The value of x is {x.current}</p>
            <button onClick={handleClick} >Click</button>
            <button onClick={changeState} >Change</button>

            </div>
        </div>

       

    );
 }

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
