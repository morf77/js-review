import React from "react"
import Li from "./Li"

const Menue =({liList})=>{
    return (
        <ul style={{display:"flex",listStyle:"none"}} className="bg-lightest-blue br-pill nav-shadow">
            {liList.map((li,i) =>{
                return (<Li 
                key={i} 
                id={li.id} 
                text={li.text}/>
                );
            })
            }
        </ul>
    )
}
export default Menue;