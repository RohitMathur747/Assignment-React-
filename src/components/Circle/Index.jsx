import React, { useState } from 'react'
import "../Circle/style.css";
const Home = () => {
    let [count, setcount]=useState(false);
    let increment=()=>{
      if(increment){
          setcount(false)
          setcount(count+1)
        }
      }
return (
    <div>
      <h1 className='ms-4 my-3 text-danger'>Counting Circles-:)</h1>
      <h3 className='ms-4 my-3 text-primary'>No of Circles -:{count}</h3>
      <h3 className='ms-4 my-3 text-secondary'>No of Circle Clicked -:</h3>
      <button onClick={increment} className="my-4 ms-5 btn btn-info">Click Here</button>
        <div className="card">
          <div className="circle">{count}
          </div>
      </div>
    </div>
  )
}

export default Home