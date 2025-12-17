import React, { useState } from "react";
import '../../style.scss';
import { generateDailyDeals, exampleCodeString } from '../codeExamples/daily-deal-example-code';
import ImageModal from '../ImageModal';
import groundsShop from '../../images/grounds-shop-new-alert.png';
import dailyDeals1 from '../../images/daily-deals1.png';

function DailyDeals() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasSubscription, setHasSubscription] = useState('false');
    const [totalDeals, setTotalDeals] = useState(3);
    const [testResults, setTestResults] = useState(null);
    
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    const handleTestCode = () => {
        const subscription = hasSubscription === 'true';
        const deals = generateDailyDeals({
            date: today,
            hasSubscription: subscription,
            totalDeals: totalDeals
        });
        setTestResults(deals);
    };
    
    return(
    <>
    <h2 className="no-gap-after">Implement Daily Deals</h2>
    <h3>Blackout Games<br/> Task Responsibilities:</h3>
    <ul className="left-align">
          <li>Create a daily deal based on a range of items from the in-game store</li>
          <li>Write code that will generate a random amount of daily deals to offer to the user</li>
          <li>Write engine code that will automatically generate daily deals for the user every 3 days and store them on Redis</li>
          <li>Perform checks to ensure the user is offered appropriate deals (Premium vs. Standard)</li>
          <li>Allow for deals to be swapped out if certain criteria is not met</li>
          <li>Add frontend handling in Unity based on daily deal data provided via API</li>
          <li>Add indicator to show when the user has a daily deal available</li>
        </ul>
        <div className="webstore-links">
            <a href="https://store.steampowered.com/app/2187050/Blackout_Football_Manager/" target="_blank" rel="noopener noreferrer">Blackout Football Manager</a>
            <a href="https://store.steampowered.com/app/1157960/Blackout_Rugby__World_Cup_Edition/" target="_blank" rel="noopener noreferrer">Blackout Rugby Manager</a>
        </div>
        <div className="project-thumbnails">
            <ImageModal src={groundsShop} alt="Grounds shop with new alert">
                <img src={groundsShop} alt="Grounds shop with new alert" />
            </ImageModal>
            <ImageModal src={dailyDeals1} alt="Daily Deals system">
                <img src={dailyDeals1} alt="Daily Deals system" />
            </ImageModal>
        </div>
        
        <div className="code-example-section">
            <button 
                className="code-example-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? '▼' : '▶'}  Example Code
            </button>
            
            {isExpanded && (
                <div className="code-example-content">
                    <pre className="code-block">
                        <code>{exampleCodeString}</code>
                    </pre>
                    
                    <div className="test-code-form">
                        <h4>Generate Daily Deals Backend Data</h4>
                        <div className="form-field">
                            <label>Date:</label>
                            <input 
                                type="text" 
                                value={today} 
                                readOnly 
                                className="form-input"
                            />
                        </div>
                        <div className="form-field">
                            <label>Has Subscription:</label>
                            <select 
                                value={hasSubscription} 
                                onChange={(e) => setHasSubscription(e.target.value)}
                                className="form-input"
                            >
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label>Total Deals (Between 1 and 10):</label>
                            <input 
                                type="number" 
                                min="1" 
                                max="10" 
                                value={totalDeals} 
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (!isNaN(val)) {
                                        if (val < 1) {
                                            setTotalDeals(1);
                                        } else if (val > 10) {
                                            setTotalDeals(10);
                                        } else {
                                            setTotalDeals(val);
                                        }
                                    }
                                }}
                                className="form-input"
                            />
                        </div>
                        <button 
                            className="test-code-button"
                            onClick={handleTestCode}
                        >
                            Test Code
                        </button>
                    </div>
                    
                    {testResults && (
                        <div className="test-results">
                            <button 
                                className="test-results-close"
                                onClick={() => setTestResults(null)}
                                aria-label="Close test results"
                            >
                                x
                            </button>
                            <h4>Deals Generated:</h4>
                            <pre className="code-block">
                                <code>{JSON.stringify(testResults, null, 2)}</code>
                            </pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    </>
    );
}
export default DailyDeals;