import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import NavBar from "./NavBar";

// Define the problem types
type Problem = {
  level: string;
  name: string;
  link: string;
};

// Define the list of problems
const problems: Problem[] = [
  {
    level: "Easy",
    name: "Find First Palindromic String in the Array",
    link: "https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/",
  },
  {
    level: "Easy",
    name: "Contains Duplicate",
    link: "https://leetcode.com/problems/contains-duplicate/description/",
  },
  {
    level: "Medium",
    name: "Max Increase to Keep City Skyline",
    link: "https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/",
  },
  {
    level: "Medium",
    name: "Gas Station",
    link: "https://leetcode.com/problems/gas-station/description/",
  },
  {
    level: "Hard",
    name: "Candy",
    link: "https://leetcode.com/problems/candy/description/",
  },
];

const App = () => {
  const [, setSelectedProblem] = useState<Problem | undefined>(
    undefined
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (problem: Problem, index: number) => {
    setSelectedProblem(problem);
    setActiveIndex(index); // Set the active problem index to position the "GO TO PROBLEM" div
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="app-container">
        <div className="problem-wrapper">
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`problem-card ${problem.level.toLowerCase()} ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleClick(problem, index)}
              >
                <div className="problem-level">{problem.level}</div>
                <div className="problem-name">{problem.name}</div>

                {activeIndex === index && (
                  <Link
                    to={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="action-slide">GO TO PROBLEM</div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
