import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './Typing.css';

const Typing = ({
    timeRemaining,
    timerstarted,
    testInfo,
    oninputchange
}) => {
    return ( 
        <div className = "typing-container">
        <div className = "timer-container">
        <p className = "timer">
                00: 
                    {timeRemaining >= 10 ? timeRemaining : '0${timeRemaining}'} 
        </p> 
        <p className="timer-info"> 
            {!timerstarted && "ARE YOU READY !!" } 
        </p> 
        </div>

        <div className = "text-area-container">
        <div className ="textarea-left">
        <div className = "textarea test-paragraph"> 
            {
           testInfo.map((individualletterInfo, index) => ( 
               <TestLetter 
                    key = {index}
                individualletterInfo = {individualletterInfo}
                />
            ))}
            
            </div>  
        </div>
        <div className = "textarea-right" >
        <textarea 
                onChange = {(e) => oninputchange(e.target.value)}
        className = "textarea"
        placeholder = "Start Typing">
        </textarea> 
        </div> 
        </div> 
        </div>
    );
};

export default Typing;
