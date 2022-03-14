const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = tutorials.map(tutorial => {

//   return tutorial[tutorial].charAt(0).toUpperCase() + arr[tutorial].slice(1);

// })

const titleCased = () => {

  tutorials.map((tutorial) => {

    const arr = tutorial.split(" ");

    const capitalize = arr.map((arr) => arr.charAt(0).toUpperCase() + arr.slice(1)

    );
    const finalTutorials = capitalize.join(" ");
    return finalTutorials;
  });
  

};
