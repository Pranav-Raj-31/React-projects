import React, { useState } from 'react';
import './Home.css';
import './Mooddetectionform.css';
const Home = () => {
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
  const data= [
    {image:'https://tse2.mm.bing.net/th?id=OIP.8IhmYXjB3XCzZ7VTEleQfQHaEK&pid=Api&P=0&h=180' ,news:"bipolar disorder",date:"8 july 2024"},
    {image:'https://tse2.mm.bing.net/th?id=OIP.6GC3UssaWKnVZ60uxfyULAHaE8&pid=Api&P=0&h=180' ,news:"Depressive disorder",date:"31 March 2023"},
    {image:'https://tse4.mm.bing.net/th?id=OIP.akqHHg315I1GzPk8DFZ5XgHaE8&pid=Api&P=0&h=180' ,news:"Mental disorders",date:"8 june 2022"},
    {image:'https://tse2.mm.bing.net/th?id=OIP.Gbqwvb7LtyTPBFqKIhVCiAHaE8&pid=Api&P=0&h=180' ,news:"Mental health of adolescents",date:"17 november 2021"},
    {image:'https://tse3.mm.bing.net/th?id=OIP.SA0FdwR9EdaXFas9YvcLpgHaEj&pid=Api&P=0&h=180' ,news:"schizophrenia",date:"10 january 2022"},    
    {image:'https://tse4.mm.bing.net/th?id=OIP.R8NDp-STfbRzt4XDQCATlwHaE3&pid=Api&P=0&h=180' ,news:"suicide",date:"29 august 2024"}
  ]
  return (
  <div className='homepage'>
    <div className="homeimg">
      <img src="/public/image4.jpg" alt="Mental Health Care" />
      <div className="homeimg-content">
        <h1>Mental Health Care Services</h1>
        <p>Your mental well-being is our priority.</p>
      </div>
      </div>

      <dev className='intro'>
          <div className='intro-part1'>
            <h1>Mental Health</h1>
            <h3>Key facts</h3>
            <li>Affordable, effective and feasible strategies exist to promote, protect and restore mental health</li>
            <li>The need for action on mental health is indisputable and urgent.</li>
            <li>Mental health has intrinsic and instrumental value and is integral to our well-being.</li>
            <li>Mental health is determined by a complex interplay of individual, social and structural stresses and vulnerabilities</li>
            <h3>Determinants of mental health</h3>
            <p>Throughout our lives, multiple individual, social and structural determinants may combine to protect or undermine our mental health and shift our position on the mental health continuum.</p>
            <p>Individual psychological and biological factors such as emotional skills, substance use and genetics can make people more vulnerable to mental health problems.</p>
            <p>Exposure to unfavourable social, economic, geopolitical and environmental circumstances – including poverty, violence, inequality and environmental deprivation – also increases people’s risk of experiencing mental health conditions.</p>
            <p>Risks can manifest themselves at all stages of life, but those that occur during developmentally sensitive periods, especially early childhood, are particularly detrimental. For example, harsh parenting and physical punishment is known to undermine child health and bullying is a leading risk factor for mental health conditions.</p>
            <p>Protective factors similarly occur throughout our lives and serve to strengthen resilience. They include our individual social and emotional skills and attributes as well as positive social interactions, quality education, decent work, safe neighbourhoods and community cohesion, among others</p>
            <p>Mental health risks and protective factors can be found in society at different scales. Local threats heighten risk for individuals, families and communities. Global threats heighten risk for whole populations and include economic downturns, disease outbreaks, humanitarian emergencies and forced displacement and the growing climate crisis.</p>
            <h3>Mental health care and treatment</h3>
            <p>In the context of national efforts to strengthen mental health, it is vital to not only protect and promote the mental well-being of all, but also to address the needs of people with mental health conditions.</p>
            <p>This should be done through community-based mental health care, which is more accessible and acceptable than institutional care, helps prevent human rights violations and delivers better recovery outcomes for people with mental health conditions. Community-based mental health care should be provided through a network of interrelated services that comprise:</p>
            <li>mental health services that are integrated in general health care, typically in general hospitals and through task-sharing with non-specialist care providers in primary health care</li>
            <li>community mental health services that may involve community mental health centers and teams, psychosocial rehabilitation, peer support services and supported living services; and</li>
            <li>services that deliver mental health care in social services and non-health settings, such as child protection, school health services, and prisons</li>
            <p>The vast care gap for common mental health conditions such as depression and anxiety means countries must also find innovative ways to diversify and scale up care for these conditions, for example through non-specialist psychological counselling or digital self-help.</p>
          </div>
          <div className='intro-part2'>
              <h3>fact sheet</h3>
              {data.map((elem,index)=>
             
              <div className='factnew'>
                <img src={elem.image} alt="" />
                <div className='fact-text'>
                  <h5>{elem.news}</h5>
                  <h6>{elem.date}</h6>
                </div>
              </div>
              
              )}
          </div>
      </dev>
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
      <button className="btn btn-primary" onClick={handleAnalyze}>
        Analyze
      </button>
      <div id="result" className="mt-3">{result}</div>
    </div>
    </div>
  );
};

export default Home;
