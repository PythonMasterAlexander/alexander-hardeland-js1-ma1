/*QUESTION1*/
const cat = {
  complain: function () {
    console.log("Meow!");
  }
};

cat.complain();

/*QUESTION2*/
const heading = document.querySelector("h3");

heading.innerHTML = `Updated heading`;

/*QUESTION3*/
heading.style.fontSize = "2em";

/*QUESTION4*/
heading.className = "subheading";

/*QUESTION5*/
const paragraphs = document.querySelectorAll("p");
const lengthOfParagraphs = paragraphs.length;

for(let i = 0; i < lengthOfParagraphs; i++) {

  paragraphs[i].style.color = "red";
}

/*OR

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {

  paragraphs[i].style.color = "red";
}
*/

/*QUESTION6*/  
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += `<p style="background-color: yellow">New paragraph</p>`;

//OR

//resultsContainer.innerHTML = resultsContainer.innerHTML + `<p>New paragraph</p>`;
//resultsContainer.style.backgroundColor = "yellow";

/*QUESTION7*/ 
function listOfCats(list) {
  const lengthOfCatsList = list.length;

  for(let i = 0; i < lengthOfCatsList; i++) {
    const nameOfCats = list[i].name;

    console.log(nameOfCats);
  }
}

listOfCats(cats);

/*QUESTION8*/ 
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  
  let html = "";

  for(let i = 0; i < cats.length; i++) {
    const catName = cats[i].name;
    const catAge = cats[i].age;

    let missingCatAge = "Age unknown";
    if(catAge) {
      
      missingCatAge = catAge;
    }

    html = html + `
    
      <div>
        <h5>${catName}</h5>
        <p>${missingCatAge}</p>
      </div>

    `;

  }

  return html;
}

catContainer.innerHTML += createCats(cats);

//As a note, I have used the += and not = when assigning the innerHTML to the function value
//This is so I can show each new html that is created on the page (I noticed in the answer branch for the questions
// you used the = when assigning the innerHTML to the functions )

//Also if(catAge) can be harder to read, I'am not sure.... leave it up to norof to decide...
