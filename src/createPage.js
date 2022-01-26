const content = document.getElementById("content");

export const homePage = (()=>{
    const createHomePage = function(){
        const hIMGdiv = document.createElement("div")
        content.appendChild(hIMGdiv);
        hIMGdiv.classList.add("hIMG")
        const homeIMG = document.createElement("img");
        homeIMG.src = "/img/oysters.jpeg";
        homeIMG.classList.add("homeImg")
        hIMGdiv.appendChild(homeIMG);

        const restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("bio")
        content.appendChild(restaurantDiv);

        const restaurantBio = document.createElement("h2");
        restaurantDiv.appendChild(restaurantBio);
        restaurantBio.textContent =
        "ORANGE COUNTY’S GATHERING SPOT FOR FRESH, FLAVORFUL SURF & TURF."
        restaurantBio.classList.add("restaurantBio")
    }
    
    return {
        createHomePage
    }

})();

export const menuPage = (() =>{
    const content = document.getElementById("content");

    const menuItems=[
        "34",
        "34",
        "34",
        "34",
        "34",
        "34"
    ];
function createMenu(){
    for(let i = 0; i < menuItems.length ; i++) {
        let newCell = document.createElement("div");
        content.appendChild(newCell);
        newCell.classList.add("menuCell")
        newCell.setAttribute("data-cell",i + 1);
    }
}
console.log(menuItems);
return{
    createMenu

}

})();