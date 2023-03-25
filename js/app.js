// Changing an element's style using querySelector()
let title = document.querySelector("#title");
title[`style`][`color`]= `red`

//Changing an element's style using querySelectorAll()
let content = document.querySelector(".content");
content[`style`][`backgroundColor`]= `yellow`


// Adding new content to a tag using innerText and by ID
let paragraph = document.getElementById("texts");
paragraph.innerText += " Etiam eu magna hendrerit, congue libero sit amet, tristique magna.";

// Adding a new tag using insertAdjacentHTML
let list = document.querySelector(".list");
list.insertAdjacentHTML("beforeend", "<li>good1</li>");

// Adding a new tag before an existing tag using insertAdjacentHTML
let firstItem = document.querySelector(".list li:first-child");
firstItem.insertAdjacentHTML("beforebegin", "<h2>New Heading</h2>");
