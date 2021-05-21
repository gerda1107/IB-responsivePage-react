import Nav from '../components/nav';
import Slider from '../components/slider';
import React, { useState, useEffect } from 'react';

function Home() {

    const [getNavIcon, setNavIcon] = useState("fas fa-bars");
    const [getNavOpen, setNavOpen] = useState(false);

    const showNav = () => {
        if (!getNavOpen) {
            document.getElementById("hidden-menu-options").style.height = "250px";
            setNavIcon("fas fa-times");
            setNavOpen(true);
        } else {
            document.getElementById("hidden-menu-options").style.height = "0px";
            setNavIcon("fas fa-bars");
            setNavOpen(false);
        }
    }

    return (
        <div>
            <Nav showNav={showNav} navIconClass={getNavIcon}/>
            <Slider/>
        </div>
    )
}

export default Home;