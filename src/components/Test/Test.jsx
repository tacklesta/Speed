import React from 'react';
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import TryAgain from "../TryAgain/TryAgain";
import './Test.css';

const test = ({
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

    return ( <
        div className = "test-container" >

        {
            timeRemaining > 0 ? ( <
                div //data - aos = "fade-up"
                className = "typing-challenge-container" >
                <
                TypingChallenge timeRemaining = { timeRemaining }
                timerstarted = { timerstarted }
                words = { words }
                characters = { characters }
                wpm = { wpm }
                selectedParagraph = { selectedParagraph }
                testInfo = { testInfo }
                oninputchange = { oninputchange }
                /> < /
                div >
            ) : ( <
                div className = "try-again-container" >
                <
                TryAgain words = { words }
                characters = { characters }
                wpm = { wpm }
                startAgain = { startAgain }
                /> < /
                div >
            )
        }

        <
        /div>
    );
};

export default test;