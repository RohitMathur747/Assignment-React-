import React, { useEffect, useState ,useRef } from "react";
import "./style.css"

const createRGB = () => `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`

let ColorFiling =() =>{
    const [boxs,setBoxs] = useState([]);
    const timer = useRef(null);
    const index = useRef(0);
    // console.log(array)

    useEffect(() => {
        if(boxs.length === 0) {
            setBoxs(Array.from(new Array(100)).map( _ => ""))
        }
    },[])
    
    const onStartHandler = () => {
        var newBoxs = [...boxs];
        timer.current = setInterval(() => {
            newBoxs[index.current++] = createRGB();
            if(index.current === 100) {
                index.current = 0;
                newBoxs = Array.from(new Array(100)).map( _ => "");
            }
            setBoxs([...newBoxs]);
        },100)
    }
    console.log(boxs)
    return (
        <div>

            <div id="btn-bontainer">
                <button onClick={onStartHandler}>Start</button>
                <button onClick={() => clearInterval(timer.current)}>End</button>
            </div>

            <div className="container">
            { boxs.map((elem ,i )=>{
            return (
                    <button style={{ backgroundColor : elem }}>{i}</button>
            )
        })}
            </div>
        </div> 
        
    )
}
export default ColorFiling;