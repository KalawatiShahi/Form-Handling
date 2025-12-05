import React,{memo, useRef} from 'react'

const Counts = () => {
 const renderCount = useRef(0);
    console.log(renderCount);
  return (
    <div>
    <p className=''>Nothing Changed here  but i have now rendered:</p>
    <span>{renderCount.current++}time(s)</span>
      
    </div>
  )
}

export default React.memo(Counts);
