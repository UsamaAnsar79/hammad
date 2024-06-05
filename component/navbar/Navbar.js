import { Turn as Hamburger } from 'hamburger-react'
import React from "react";
import { useState } from "react";

const Navbar=()=>{
    const [isOpen, setOpen] = useState(false);
    
    return(
    <div className="cover">
           <div className='search-info-bar user '>
      <h4 className='db'>DASHBOARD</h4>
      </div>
        <div className="navbar show display">
        <Hamburger color="White" toggled={isOpen}  size={40}  rounded toggle={setOpen}/>
        </div>
    </div>
   
    );
}
export default Navbar;


