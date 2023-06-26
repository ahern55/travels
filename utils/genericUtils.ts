export const capitalizeWordFirstLetter = (word: string) => {
  return word.slice(0, 1).toLocaleUpperCase() + word.slice(1);
};

export const capitalizeAllWords = (words: string) => {
  return words
    .toLowerCase()
    .split(" ")
    .map((word) => capitalizeWordFirstLetter(word))
    .join(" ");
};

export const getImageLocationFromFolderPath = (path: string) => {
  // Assuming the folders are of this form:
  // travels/{country}/{city or region}
  // note that in city-states like singapore, there won't always be a city
  //    in this case, just return the country name
  const folders = path.split("/");

  const possibleCity = folders.length > 2 ? capitalizeAllWords(folders[2]) : "";

  const separator = possibleCity ? ", " : "";

  const country = capitalizeAllWords(folders[1]);

  return `${possibleCity}${separator}${country}`;
};
