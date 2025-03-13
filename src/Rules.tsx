import "./rules.css";

const Rules = () => {
  return (
    <>
      <div className="rules-container">
        <h1 className="rules-title">Rules</h1>
        <ul className="rules-list">
          <li className="rule-item">
            You are allowed to work individually or in pairs, but larger teams
            are not permitted.
          </li>
          <li className="rule-item">
            If you decide to work in pairs you'll have to split the prize
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
            Using AI or asking the browser questions without supervision will
            result in immediate disqualification.
          </li>
          <li className="rule-item">
            After reading the response to your question, be sure to close the
            tab.
          </li>
          <li className="rule-item">
            After submitting your response on LeetCode, please raise your hand
            so a member of the organizing committee can record the number of
            tests you passed.
          </li>
          <li className="rule-item">
            You're not allowed to view other peoples submissions on LeetCode,
            doing so will get you disqualified.
          </li>
          <li className="rule-item">
            You are allowed to use VSCode (or any other IDE) and its debugger,
            but any Copilot-style extensions that auto-generate code must be
            disabled. If caught using them, you will be disqualified.
          </li>
          <li className="rule-item">
            The winner will be the person who earns the most points by the end
            of the contest. Or whoever solves all the problems first.
          </li>
        </ul>

        <h2 className="what-not-title">WHAT NOT TO ASK AI/BROWSER</h2>
        <ul className="what-not-list">
          <li className="what-not-item">
            <strong>Do not ask for direct solutions:</strong> i.e., "Give me the
            answer to the problem."
          </li>
          <li className="what-not-item">
            <strong>Do not ask for debugging by pasting your code:</strong>{" "}
            i.e., "Why isn't my code working? *pastes code*"
          </li>
          <li className="what-not-item">
            <strong>Do not request code to be written for you:</strong> i.e.,
            "Provide me with the code to solve this."
          </li>
        </ul>

        <h2 className="what-not-title">WHAT TO ASK AI/BROWSER</h2>
        <ul className="what-not-list">
          <li className="what-not-item">
            <strong>Syntax questions</strong>, e.g., "How do you create a method
            in C#?"
          </li>
          <li className="what-not-item">
            <strong>Language-specific concepts</strong>, e.g., "What is the
            difference between a List and a HashSet in C#?"
          </li>
          <li className="what-not-item">
            <strong>Questions about error messages</strong>, e.g., "What does
            'NullReferenceException' mean in C#?"
          </li>
        </ul>

        <div className="point-system-container">
          <h2 className="point-system-header">Point System</h2>
          <div className="point-system-item">
            <div className="difficulty">Easy Question</div>
            <div className="points">Worth 10 points</div>
          </div>
          <div className="point-system-item">
            <div className="difficulty">Medium Question</div>
            <div className="points">Worth 20 points</div>
          </div>
          <div className="point-system-item">
            <div className="difficulty">Hard Question</div>
            <div className="points">Worth 40 points</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
