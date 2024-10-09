class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }
  static titleize(sentence) {
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let sentenceArray = sentence.toLowerCase().split(' ');
    let sentenceCapital = sentenceArray.map((e, index) => {
      if (index === 0) {
        return Formatter.capitalize(e)
      } else if (excludeWords.includes(e)) {
        return e;
      } else {
        return Formatter.capitalize(e)
      }
    })
    let sentenceJoin = sentenceCapital.join(' ');
    return sentenceJoin;
  }
}