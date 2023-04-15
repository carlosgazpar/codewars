const getMiddle = (word) => {
  const wordLength = word.length;
  const isEven = wordLength % 2 === 0;
  const middleWord = Math.round(wordLength / 2) - 1;
  if (isEven) {
    return word.slice(middleWord, middleWord + 1);
  } else {
    return word.slice(middleWord, middleWord);
  }
};

getMiddle("aabpbala");
