import PropTypes from "prop-types";
import result from "../assets/undraw_winners_ao2o 2.svg";

const Result = ({ score, setTryAgain }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <img src={result} alt="" />
      <h1>Results</h1>
      <p>
        You got{" "}
        <span className="text-4xl font-bold text-green-400">{score}</span>{" "}
        correct answers
      </p>
      <button
        onClick={() => setTryAgain(true)}
        className="font-bold py-3 px-8 rounded-xl border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition-all"
      >
        Try Again
      </button>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  setTryAgain: PropTypes.func.isRequired,
};

export default Result;
