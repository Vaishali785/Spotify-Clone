

function capitalizeFirstLetter(word) {
    let firstLetter = word.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    const restWord = word.slice(1); //returns word except first letter
    const editedWord = firstLetter + restWord;
    // console.log(editedWord);
    return editedWord;
}

export default capitalizeFirstLetter