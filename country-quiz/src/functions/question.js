const getQuestion = (country) => {
  let question = "";

  const questionTypes = ["capital", "flag"];

  const questionType =
    questionTypes[Math.floor(Math.random() * questionTypes.length)];

  if (questionType === "capital") {
    question = `${country.capital[0]} is the capital of?`;
  } else {
    question = `${country.flag} is the flag of?`;
  }

  return question;
};

export default getQuestion;
