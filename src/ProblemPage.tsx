import { useParams } from "react-router-dom";
import "./styles.css";

const ProblemPage = () => {
  const { level, name } = useParams();

  return (
    <div className="problem-page">
      <h1>{name}</h1>
      <p>Difficulty Level: {level}</p>
    </div>
  );
};

export default ProblemPage;
