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
  const folders = path.split("/");

  return `${capitalizeAllWords(folders[2])}, ${capitalizeAllWords(folders[1])}`;
};
