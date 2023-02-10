const vowels = ['a', 'e', 'i', 'o', 'u'];

const hasMoreVowels = word => {
    let vowelCounter = 0;
    let constantCounter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelCounter++;
        } else {
            constantCounter++;
        }
    }
    return vowelCounter > constantCounter;
};

console.log(hasMoreVowels('unicycle'))
console.log('Big')