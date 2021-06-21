import React from 'react';
import Test from '../Test/Test';
import './Challenge.css';

const Challenge = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerstarted,
    testInfo,
    oninputchange,
    startAgain
}) => {
    return (
        <div className="Challenge-container">
        <h1 data-aos="fade-down"
        className="Challenge-header">
        Take a Speed test now!
        </h1> 
        <Test 
        selectedPararaph = {selectedParagraph}
        timeRemaining = {timeRemaining}
        timerstarted = {timerstarted}
        words = {words}
        characters = {characters}
        wpm = {wpm}
        testInfo = {testInfo}
        oninputchange = {oninputchange}
        startAgain = {startAgain}
        />

        </div>
    );

};

export default Challenge;
