import React from 'react';
import './EP.css'

export const EventPropagation = ()=>{
     

    const handleGrandParent = (event)=>{
          console.log(event)
        console.log("Grand Parent");
    }

    const handleParentClick = (event)=>{
          console.log(event)
        console.log("Parent Click")
    }

    const handleChildClick = (event) =>{
        console.log(event)
        console.log("Child Click");
    }

    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
            Grand Parent
            <br/>
                <div className="p-div" onClick={handleParentClick}>
                 Parent Div
                 <br/>
                  <button className="c-div" onClick={handleChildClick}>
                    Child Div
                  </button>
                </div>
            </div>
        </section>
    )
}