import {menuPage} from './createPage.js';
import {homePage} from './createPage.js';
import './styles.css';

const body = document.getElementById("body");
const header = document.createElement("div");
const titleScript = document.createElement("h2");

header.classList.add("header-container");

titleScript.classList.add("header-title");
titleScript.textContent = "JOON'S SPOON";

body.insertBefore(header, body.firstChild);
header.appendChild(titleScript);

const headerButtonContainer = document.createElement("div");
headerButtonContainer.classList.add("buttons");
header.appendChild(headerButtonContainer);

const homeButton= document.createElement("button")
homeButton.innerHTML = "Home";
headerButtonContainer.appendChild(homeButton);
homeButton.addEventListener('click', ()=> {
    clearContent();
    homePage.createHomePage();
})


const menuButton= document.createElement("button")
menuButton.innerHTML = "Menu";
headerButtonContainer.appendChild(menuButton);
menuButton.addEventListener('click', ()=> {
    clearContent();
    menuPage.createMenu();

})

const contactButton= document.createElement("button")
contactButton.innerHTML = "Contact";
headerButtonContainer.appendChild(contactButton);
contactButton.addEventListener('click', ()=> {
    clearContent();
})

const clearContent = function (){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}
homePage.createHomePage();








