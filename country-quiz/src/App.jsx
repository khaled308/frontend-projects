import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./components/Question";
import Choices from "./components/Choices";
import getQuestion from "./functions/question";
import getChoices from "./functions/choices";
import Result from "./components/Result";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [nextBtn, setNextBtn] = useState(false);
  const [country, setCountry] = useState({});
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);

  axios.defaults.baseURL = "https://restcountries.com/v3.1";

  useEffect(() => {
    setLoading(true);
    axios.get("/all?fields=name,capital,flag").then((res) => {
      setCountries(res.data);
      setLoading(false);
      const randomCountry =
        res.data[Math.floor(Math.random() * res.data.length)];
      setCountry(randomCountry);
      setQuestion(getQuestion(randomCountry));
      setChoices(getChoices(res.data, randomCountry));
    });
  }, []);

  const getSelectedChoice = (choice) => {
    if (choice.name.common === country.name.common) {
      setScore(score + 1);
    } else setWrongAnswer(true);

    setNextBtn(true);
  };

  const handelNext = () => {
    setNextBtn(false);

    if (wrongAnswer) setFinished(true);
    else {
      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];
      setCountry(randomCountry);
      setQuestion(getQuestion(randomCountry));
      setChoices(getChoices(countries, randomCountry));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-app-image bg-cover">
      {countries.length > 0 && !loading ? (
        <div className="w-full max-w-[464px] bg-white rounded-3xl py-16 px-8">
          {!finished ? (
            <>
              <Question question={question} />
              <Choices
                choices={choices}
                getSelectedChoice={getSelectedChoice}
                correctChoice={country}
              />
            </>
          ) : (
            <Result score={score} />
          )}
          {nextBtn && (
            <div className="text-end">
              <button
                onClick={handelNext}
                className="bg-F9A826 text-white font-bold py-3 px-8 rounded-xl"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
