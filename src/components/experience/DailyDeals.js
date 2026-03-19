import React, { useState } from "react";
import "../../style.scss";
import { generateDailyDeals, exampleCodeString } from "../codeExamples/daily-deal-example-code";
import ImageModal from "../ImageModal";
import groundsShop from "../../images/grounds-shop-new-alert.png";
import dailyDeals1 from "../../images/daily-deals1.png";

function DailyDeals() {
  const [showDetails, setShowDetails] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasSubscription, setHasSubscription] = useState("false");
  const [totalDeals, setTotalDeals] = useState(3);
  const [testResults, setTestResults] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const handleTestCode = () => {
    const subscription = hasSubscription === "true";
    const deals = generateDailyDeals({
      date: today,
      hasSubscription: subscription,
      totalDeals
    });
    setTestResults(deals);
  };

  return (
    <>
      <h2 className="no-gap-after">Implement Daily Deals</h2>
      <p className="experience-preview">
        Designed and implemented a rotating daily deals system with backend
        generation logic, eligibility checks, and frontend integration.
      </p>
      <div className="project-thumbnails">
        <ImageModal src={groundsShop} alt="Grounds shop with new alert">
          <img src={groundsShop} alt="Grounds shop with new alert" />
        </ImageModal>
        <ImageModal src={dailyDeals1} alt="Daily Deals system">
          <img src={dailyDeals1} alt="Daily Deals system" />
        </ImageModal>
      </div>
      <button className="collapsible-toggle" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && (
        <div className="collapsible-content">
          <h3>Blackout Games<br /> Responsibilities:</h3>
          <ul className="left-align">
            <li>Built the backend logic to generate rotating daily deals from the in-game store catalog</li>
            <li>Implemented scheduling and persistence so deals refreshed automatically on a fixed cycle</li>
            <li>Added eligibility checks for different player states, including premium and standard users</li>
            <li>Handled fallback logic when a generated deal did not meet the required criteria</li>
            <li>Integrated the API response into the Unity client and added a UI indicator for available deals</li>
          </ul>
          <div className="webstore-links">
            <a href="https://store.steampowered.com/app/2187050/Blackout_Football_Manager/" target="_blank" rel="noopener noreferrer">Blackout Football Manager</a>
            <a href="https://store.steampowered.com/app/1157960/Blackout_Rugby__World_Cup_Edition/" target="_blank" rel="noopener noreferrer">Blackout Rugby Manager</a>
          </div>

          <div className="code-example-section">
            <button className="code-example-toggle" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Hide example code" : "Show example code"}
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
                    <input type="text" value={today} readOnly className="form-input" />
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
                        const val = parseInt(e.target.value, 10);
                        if (!Number.isNaN(val)) {
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
                  <button className="test-code-button" onClick={handleTestCode}>
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
        </div>
      )}
    </>
  );
}

export default DailyDeals;
