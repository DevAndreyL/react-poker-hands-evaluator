import React, { useState } from 'react';
import './App.css';
import HandEvaluator from './HandEvaluator';

function App() {
    const [result, setResult] = useState(null);

    const handleSubmit = async (hands) => {
        try {
            const response = await fetch('http://127.0.0.1/evaluate-hand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ hands }),
            });
            const data = await response.json();

            let winnerKey = null;
            let maxWeight = -1;
            let isTie = false;

            for (const handKey in data.result) {
                const combinationWeight = data.result[handKey].combinationWeight;
                if (combinationWeight > maxWeight) {
                    maxWeight = combinationWeight;
                    winnerKey = handKey;
                    isTie = false;
                } else if (combinationWeight === maxWeight) {
                    isTie = true;
                }
            }

            for (const handKey in data.result) {
                data.result[handKey].isWinner = !isTie && handKey === winnerKey;
            }

            setResult(data.result);
        } catch (error) {
            console.error('Error evaluating hands:', error);
        }
    };

    return (
        <div className="app">
            <HandEvaluator onSubmit={handleSubmit} />
            {result && (
                <div className="result">
                    <h2>Result</h2>
                    {Object.keys(result).map(handKey => (
                        <div key={handKey}>
                            <p>Hand Name: {handKey}</p>
                            <p>Combination Name: {result[handKey].combinationName}</p>
                            <p>Hand Weight: {result[handKey].handWeight}</p>
                            <p>Combination Weight: {result[handKey].combinationWeight}</p>
                            {result[handKey].isWinner && <p className="winner">Winner!</p>}
                            <br/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;