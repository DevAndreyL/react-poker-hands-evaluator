import React, { useState } from 'react';

const HandEvaluator = ({ onSubmit }) => {
    const [firstHand, setFirstHand] = useState('');
    const [secondHand, setSecondHand] = useState('');
    const [thirdHand, setThirdHand] = useState('');

    const handleSubmit = () => {
        const first = firstHand.split(',').map(card => card.trim()).filter(card => card !== '');
        const second = secondHand.split(',').map(card => card.trim()).filter(card => card !== '');
        const third = thirdHand.split(',').map(card => card.trim()).filter(card => card !== '');

        let hands = {};

        if (first.length !== 0) {
            hands.first = first;
        }
        if (second.length !== 0) {
            hands.second = second;
        }
        if (third.length !== 0) {
            hands.third = third;
        }

        onSubmit(hands);
    };

    return (
        <div className="hand-evaluator">
            <h2>Hand Evaluator</h2>
            <div>
                <label>Enter cards for the first hand (comma-separated):</label>
                <input type="text" value={firstHand} onChange={e => setFirstHand(e.target.value)} />
            </div>
            <div>
                <label>Enter cards for the second hand (comma-separated):</label>
                <input type="text" value={secondHand} onChange={e => setSecondHand(e.target.value)} />
            </div>
            <div>
                <label>Enter cards for the third hand (comma-separated):</label>
                <input type="text" value={thirdHand} onChange={e => setThirdHand(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Evaluate Hands</button>
        </div>
    );
};

export default HandEvaluator;