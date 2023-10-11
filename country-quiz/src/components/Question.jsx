import PropTypes from "prop-types";

const Question = ({ question }) => {
  return <h2 className="text-2F527B font-bold text-2xl mb-8">{question}</h2>;
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
