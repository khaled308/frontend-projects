import PropTypes from "prop-types";
import Choice from "./Choice";
import { useEffect, useState } from "react";

const Choices = ({ choices, getSelectedChoice, correctChoice }) => {
  const [selected, setSelected] = useState(false);
  const [className, setClassName] = useState("");
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);

  const handelClick = (choice, index) => {
    getSelectedChoice(choice);
    setSelected(true);
    setSelectedChoiceIndex(index);

    if (choice.name?.common !== correctChoice.name?.common) {
      setClassName("bg-red-500 text-white");
    }
  };

  useEffect(() => {
    setSelected(false);
    setSelectedChoiceIndex(null);
  }, [choices]);

  return (
    <>
      <ul>
        {choices.map((choice, index) => (
          <Choice
            key={index}
            txt={choice.name?.common}
            onClick={() => handelClick(choice, index)}
            choiceLetter={String.fromCharCode(index + 65)}
            className={
              choice.name?.common === correctChoice.name?.common
                ? "bg-green-500 text-white"
                : selectedChoiceIndex === index && className
            }
            selected={selected}
          />
        ))}
      </ul>
    </>
  );
};

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  getSelectedChoice: PropTypes.func.isRequired,
  className: PropTypes.string,
  correctChoice: PropTypes.object,
};

export default Choices;
