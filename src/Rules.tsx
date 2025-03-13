import "./rules.css";

const Rules = () => {
  return (
    <>
      <div className="rules-container">
        <h1 className="rules-title">Rules</h1>
        <ul className="rules-list">
          <li className="rule-item">
            Using AI or asking the browser questions without supervision will
            result in immediate disqualification.
          </li>
          <li className="rule-item">
            You are allowed to work individually or in pairs, but larger teams
            are not permitted.
          </li>
          <li className="rule-item">
            If you have a question for AI or the browser, please raise your hand
            first.
          </li>
          <li className="rule-item">
            Your question to the AI/browser must be approved by a member of the
            organizing committee; otherwise, you'll need to rephrase it.
          </li>
          <li className="rule-item">
            After reading the response to your question, be sure to close the
            tab.
          </li>
          <li className="rule-item">
            The winner will be the person who earns the most points by the end
            of the contest.
          </li>
        </ul>
        <h2 className="what-not-title">WHAT NOT TO ASK AI/BROWSER</h2>
        <ul className="what-not-list">
          <li className="what-not-item">
            "Give me the answer to the problem."
          </li>
          <li className="what-not-item">"Why isn't my code working?"</li>
          <li className="what-not-item">
            "Provide me with the code to solve this."
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rules;
