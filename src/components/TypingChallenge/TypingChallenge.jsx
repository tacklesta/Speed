import React from 'react';
import Typing from '../Typing/Typing';
import DetailCards from "../DetailCards/DetailCards";
import './TypingChallenge.css';

const TypingChallenge = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerstarted,
    testInfo,
    oninputchange
}) => {
    return ( 
        <div className = "typing-challenge-container" >
        <div className = "details-container" >

        <DetailCards cardname = "words" cardvalue = {words}/> 

        <DetailCards cardname = "characters" cardvalue={characters}/> 
            
        <DetailCards cardname = "wpm" cardvalue = { wpm }/>

        </div>

        <div className = "typewriter-container" >
        <Typing 
        testInfo = {testInfo}
        timeRemaining = {timeRemaining}
        timerstarted = {timerstarted}
        selectdPararaph = {selectedParagraph}
        oninputchange = {oninputchange}
        />  
        </div> 
      </div>

    );
};

export default TypingChallenge;
