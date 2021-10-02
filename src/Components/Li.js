import React from "react" 

const Li =({id,text})=>{
    return (
        <li style={{marginLeft:"15px"}} className="bg-navy light-green shadow-3 pa2 br-pill br--right grow">{`${id}) ${text}`}</li>
    )
}
export default Li;