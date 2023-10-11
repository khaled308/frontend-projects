const getChoices = (countries = [], country = null) => {
  const randomChoices = [];

  while (randomChoices.length < 3) {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    if (randomCountry?.name?.common !== country?.name?.common) {
      randomChoices.push(randomCountry);
    }
  }

  randomChoices.push(country);
  randomChoices.sort(() => Math.random() - 0.5);
  return randomChoices;
};

export default getChoices;
