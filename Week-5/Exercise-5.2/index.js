let isVowel = (char) => {
  let vowels = "aeiou";
  return vowels.includes(char);
};

let vowelCount = (str) => {
  let vowelMap = new Map();

  for (let eachChar of str) {
    let lowerCaseChar = eachChar.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
};

console.log(vowelCount("Rohit"));
//Map { 'o' => 1, 'i' => 1 }
