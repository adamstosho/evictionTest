  // Question 1
  const names = ['Ali', 'Aisha', 'Omar', 'Fatima', 'Amir'];

  const namesWithA = names.filter(name => name.startsWith("A"));
  console.log(namesWithA);

  
  // question 2
  const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordsCount = words.reduce((a, b) => { a[b] = (a[b] || 0) + 1;

  return a
}, [])
console.log({wordsCount}) 


// Question 3
// Simulate Food Order Process using callback hell
function orderFood(callback) {
  setTimeout(() => {
    console.log("Food ordered");
    callback();
  }, 2000);
}

function prepareFood(callback) {
  setTimeout(() => {
    console.log("Food prepared");
    callback();
  }, 3000);
}

function deliverFood(callback) {
  setTimeout(() => {
    console.log("Food delivered");
    callback();
  }, 3500);
}

function receiveFood(callback) {
  setTimeout(() => {
    console.log("Food received");
    callback();
  }, 4000);
}

function makePayment(callback) {
  setTimeout(() => {
    console.log("Payment made");
    callback();
  }, 5000);
}

orderFood(() => {
  prepareFood(() => {
    deliverFood(() => {
      receiveFood(() => {
        makePayment(() => {
          console.log("Food order process completed");
        });
      });
    });
  });
});



// question 4
const studentCredentials = [
  {name: "Adam", score: 99, passed: true},
  {name: "Josh", score: 76, passed: true},
  {name: "Rahman", score: 39, passed: false},
  {name: "Jerry", score: 60, passed: true}
]

// forEach Method of Iteration 

studentCredentials.forEach((value) => {
  console.log(`${value.name} score is ${value.score}`);
})

// map method for iteration
const studentNamesInUppercase = studentCredentials.map((value) => { return value.name.toUpperCase()
}) 
console.log(studentNamesInUppercase);

//filter method of iteration 
// const passedStudents = studentCredentials.filter((value) => {

//   }
// )
// console.log(passedStudents)


  // Question 2: 
  
  const students = {
    Ali: [85, 90, 78],
    Aisha: [92, 88, 84],
    Omar: [79, 85, 80],
    Fatima: [91, 89, 95],
    Amir: []
  };

  function getStudentScores(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (students[name] !== undefined) {
          resolve(students[name]);
        } else {
          reject(new Error('Student not found'));
        }
      }, 2000);
    });
  }

  async function calculateAverage(name) {
    try {
      const scores = await getStudentScores(name);
      const average = scores.reduce((a, b) => a + b, 0) / scores.length;
      console.log(`Average score for ${name}: ${average}`);
    } catch (error) {
      console.error(error.message);
    }
  }





  // 1. Functions are reusuable blocks of codes which can be achieved following the method:- 
  // a. function declaration
  // b. function with expression
  //c. arrow functions

  // Function Declaration Example

function myName (){
  return "Hello World!"
}

// Function with Expressions Example
const myLife = function() {
  return "Hello World!"
}


// Arrow Function Example
const myBabe =  () => {
  return "Hello World!"
}



  // 2. what are scopes
  // Give the different types of scopes and their differences with examples
  
  // Scopes determine where/how our codes are accessible based on the set functions. 
  // types of scopes include: - 
  //a. global scope - global scope allow our variables to be declared before the function is declared, ensuring the variable is accessible by all.

  // const  gloal 
  //b. local scope  - local scope only allow are variables to be declared inside the function, i.e. after function declaration 
  //c. lexical scope - 

  // examples of scope 

  let globalVar = "Example of scope"

function globalScope(){
  console.log(globalVar)
}
globalScope()


// LOCAL SCOPE

function localScope(){
  let localVar = "check me for local scope"
  console.log(localVar)
}
localScope()


// lexical scope
function first(){
  let outerVar = "I am a lexcial scope";
  
  function second(){
    
    function third(){
      console.log(outerVar)
    }
    third()
  }
  second()
}
first()



  3. 
  const articles = [
    {
        title: "The Future of Web3",
        content: "Web3 is revolutionizing the internet by enabling decentralized applications and blockchain-based solutions.",
        author: "Alice Johnson"
    },
    {
        title: "Understanding JavaScript Closures",
        content: "Closures allow functions to access variables from an outer function even after the outer function has executed.",
        author: "David Smith"
    },
    {
        title: "AI in Healthcare",
        content: "Artificial Intelligence is transforming healthcare through improved diagnostics, personalized medicine, and robotic surgeries.",
        author: "Sophia Williams"
    }
];


const mainContainer = document.getElementById('mainContainer')
mainContainer.innerHTML = articles.map(article =>
  `
  <div id="secondContainer">
    <h3>title: ${article.title}</h3>
    <p>content: ${article.content}</p>
    <small>author: ${article.author}</small>
  </div>
  `
)














  
