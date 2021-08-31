// Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close,
// return whichever has the higher page.

let book = {
  "Chapter 1": 1,
  "Chapter 2": 15,
  "Chapter 3": 37,
};

const closestToPage = (book, page) => {
  let output;
  let closestMatch = Math.max(...Object.values(book));
  for (chapter in book) {
    if (Math.abs(page - book[chapter]) <= closestMatch) {
      closestMatch = Math.abs(page - book[chapter]);
      output = chapter;
    }
  }
  return output;
};

console.log(closestToPage(book, 8));
//should return "Chapter 2"
