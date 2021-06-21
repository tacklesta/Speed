import React from 'react';
import './Landing.css';
import flash from './../../assets/hero.png';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return ( <
        div className = "Landing-container" >
        <
        div //data - aos: "fade-right"
        className = "Landing-left" >
        <
        h1 className = "Landing-header" > Can you type... < /h1> <
        div className = "typewriter-container" >

        <
        Typewriter options = {
            {
                strings: ['Fast?', 'Correct', 'Quick'],
                autoStart: true,
                loop: true,
            }
        }
        /> < /
        div > <
        /div>

        <
        div className = "Landing-right" >
        <
        img //data - aos = "fade-left"
        className = "flash-image"
        src = { flash }
        alt = "hero" /
        >

        <
        /div> < /
        div >

    );

}

export default Landing;