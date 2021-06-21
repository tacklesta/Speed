import React from 'react';
import './TryAgain.css';
const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain
}) => {
    return ( <
        div //data - aos = "fade-up"
        className = "TryAgain-container" >
        <
        h1 > Test Results < /h1>

        <
        div className = "result-container" >
        <
        p >
        <
        b > Characters: < /b> {characters} < /
        p >

        <
        p >
        <
        b > Words: < /b> {words} < /
        p >

        <
        p >
        <
        b > Speed: < /b> {wpm} wpm < /
        p >

        <
        /div> <
        div >
        <
        button onClick = {
            () => startAgain()
        }
        className = "end-buttons start-again" > Re - Try < /button> <
        button onclick = {
            () => {
                window.open("https://www.facebook.com/sharer/sharer.php?TTL",
                    "facebook-share-dialog",
                    "width=800,height=600"
                );
            }
        }
        className = "end-buttons share-button" >
        Share <
        /button>

        <
        button onclick = {
            () =>
            window.open("https://www.twitter.com/intent/tweet?text=TTL.com",
                "Twitter",
                "width=800,height=600"
            )
        }
        className = "end-buttons tweet-button" >
        Tweet <
        /button>

        <
        /div> < /
        div >
    );
};

export default TryAgain;