import React,{useState} from 'react';
import Counts from './MemoCount';


const ReactMemo = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <div>
          <h1>{count}</h1>
          <button onClick={()=>setCount((prev)=>prev + 1)}>Increment</button>
      </div>
      <Counts/>
    </>
  )
}

export default ReactMemo
