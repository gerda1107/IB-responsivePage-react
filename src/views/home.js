import Nav from '../components/nav';
import Slider from '../components/slider';
import React, { useState } from 'react';

function Home() {

    const [getNavIcon, setNavIcon] = useState({ class: "fas fa-bars", trigger: false });

    const showNav = () => {
        if (!getNavIcon.trigger) {
            document.getElementById("hidden-menu-options").style.height = "250px";
            setNavIcon({class: "fas fa-times", trigger: true});
        } else {
            document.getElementById("hidden-menu-options").style.height = "0px";
            setNavIcon({class: "fas fa-bars", trigger: false});
        }
    }

    return (
        <div>
            <Nav showNav={showNav} navIconClass={getNavIcon.class} />
            <Slider/>
        </div>
    )
}

export default Home;