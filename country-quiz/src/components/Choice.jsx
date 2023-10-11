import PropTypes from "prop-types";

const Choice = ({
  txt,
  onClick,
  choiceLetter,
  selected = false,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-6 items-center cursor-pointer border-6066D0B2 border-solid border p-5 mb-7 rounded-xl text-6066D0B2 hover:border-white hover:bg-F9A826 hover:text-white ${
        selected ? className : ""
      }}`}
    >
      <p>{choiceLetter}</p>
      <p>{txt}</p>
    </div>
  );
};

Choice.propTypes = {
  txt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  choiceLetter: PropTypes.string.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
};

export default Choice;
