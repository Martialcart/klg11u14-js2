/* 
hovedsakelig id for js
og class for css
*/

const redSquare = document.querySelector("#redSquare");
console.log(redSquare);

Array.from(document.querySelectorAll('*')).forEach(function callback(el, i) {
    el.classList.add("flyToFront");

});

// redSquare.style.height = "100px";
// redSquare.style.width = "100px";
// redSquare.style.backgroundColor = "red";
redSquare.classList.add("redContainer");

// redSquare.style.{
    //     height = "100px",
    //     width = "100px",
    //     backgroundColor = "red",
    // }
    
    const greenSquare = document.querySelector("#greenSquare");
    console.log(greenSquare);
    
greenSquare.style.height = "100px";
greenSquare.style.width = "100px";
greenSquare.style.backgroundColor = "green";


//legge til element med javascript

const cardContainer = document.querySelector("#cardContainer");
console.log(cardContainer);

const cardHeading = document.createElement("h1");
console.log(cardHeading);

cardContainer.appendChild(cardHeading);
console.log(cardContainer);

cardHeading.textContent = "Hei på deg";