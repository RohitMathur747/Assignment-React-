import React, { useState } from "react";
import "./style.css";

function ClickFunction() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    const handlebtn = () => {
    setValue((pre) => pre + 1);
    };

    const Clicked =(e)=> {

    if(e.target.style.backgroundColor==="black"){
        e.target.style.backgroundColor="white";
        setCount((count)=> count-1);
    }
    else{
    e.target.style.backgroundColor="black";
    setCount((count)=> count+1);
    }
}
    return (
        <>
            <h1 className='ms-4 my-3 text-danger text-center'>Counting Circles-:)</h1>
            <button onClick={handlebtn} className="text-light my-4 form-control btn btn-info">Click Here</button>
            <h3 className='ms-4 my-3 text-primary'>No of Circles -: {value}</h3>
            <h3 className='ms-4 my-3 text-secondary'>No of Circle Clicked -: {count}</h3>
            
            {Array.from({ length: value }, i => i).map((item) => {
            return <div className="card" key={item} onClick={(e)=>Clicked(e)}></div>;
        })}
    </>
    );
}
export default ClickFunction;