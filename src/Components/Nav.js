import React from "react";
// import Logo from "./Logo"
import Menue from "./Menue"

const Nav = ({liList})=>{
    return (
        <div>
            {/* <Logo /> */}
            <Menue liList={liList}/>
        </div>
    )
}
export default Nav;