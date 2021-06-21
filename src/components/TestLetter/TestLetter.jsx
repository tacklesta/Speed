import React from 'react';
import './TestLetter.css';

const TestLetter = ({ individualletterInfo }) => {
    const { status } = individualletterInfo;

    const statusClass = {
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-Attempted'
    }[status];

    return ( <
        span className = { `test-letter ${statusClass}` } > { individualletterInfo.testLetter } <
        /span>
    );
};

export default TestLetter;