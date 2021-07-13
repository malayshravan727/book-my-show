import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
  return (
    <>
        <h1 className="text-xl">Default Layout</h1>
        <Navbar />
        <HeroCarousal />
        {props.children}
    </>
  );
};

export default DefaultLayout;