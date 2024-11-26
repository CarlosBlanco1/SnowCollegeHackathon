import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const problems = [
  { level: "Easy", name: "Problem1" },
  { level: "Easy", name: "Problem2" },
  { level: "Medium", name: "Problem3" },
  { level: "Medium", name: "Problem4" },
  { level: "Hard", name: "Problem5" },
  { level: "Hard", name: "Problem6" },
];

const HomePage = () => {
  const [hovered, setHovered] = useState(-1);

  return (
    <div className="container">
      {problems.map((problem, index) => (
        <div
          key={index}
          className={`problem-card ${hovered === index ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(-1)}
        >
          <div className="problem-level">{problem.level}</div>
          <div className="problem-name">{problem.name}</div>
          {hovered === index && (
            <div className="action-slide">
              <Link to={`/problem/${problem.level}/${problem.name}`}>
                Go to Problem
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
