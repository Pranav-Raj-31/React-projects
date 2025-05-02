import React, { useState } from 'react';
import './Mooddetectionform.css';
function Mooddetectionform() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  // Sentiment analysis logic
  const analyzeSentiment = (text) => {
    const positiveWords = ['happy', 'joy', 'good', 'love', 'great'];
    const negativeWords = ['sad', 'depressed', 'anxious', 'lonely', 'stress'];

    const words = text.toLowerCase().match(/\b\w+\b/g);

    let positiveCount = 0;
    let negativeCount = 0;

    if (words) {
      words.forEach(word => {
        if (positiveWords.includes(word)) {
          positiveCount++;
        } else if (negativeWords.includes(word)) {
          negativeCount++;
        }
      });
    }

    if (positiveCount > negativeCount) {
      return 'Positive';
    } else if (negativeCount > positiveCount) {
      return 'Negative';
    } else {
      return 'Neutral';
    }
  };

  // Handler to analyze text on button click
  const handleAnalyze = () => {
    const sentiment = analyzeSentiment(inputText);
    setResult('Analysis result: ' + sentiment);
  };

  return (
    <div className="mood-container">
      <h1 >Current Mood Detection</h1>
      <div className="form-group">
        <label htmlFor="inputText">Share with us, how are you feeling today?</label>
        <textarea
          className="form-control"
          id="inputText"
          rows="5"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <button className="btn-primary" onClick={handleAnalyze}>
        Analyze
      </button>
      <div id="result" className="mt-3">{result}</div>
    </div>
  );
}

export default Mooddetectionform;
