import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <React.Fragment> 
    <nav  className="absolute px-6 h-12 z-10 flex flex-row bg-red-500 w-full text-white font-semibold justify-end">
      <ul>
        <Link className="pl-2" to="/">Home</Link>
        <Link className="pl-2" to="/projects/holygrail">Holygrail</Link>
        <Link className="pl-2" to="/projects/jobstories">Jobstories</Link>
      </ul>
    <div></div>
    </nav>
    
    </React.Fragment>
  );
};

export default Navbar