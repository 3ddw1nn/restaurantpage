const content = document.getElementById("content");
import homeIMG from './oysters.jpeg'

export const homePage = (()=>{
    const createHomePage = function(){
        const hIMGdiv = document.createElement("div")
        content.appendChild(hIMGdiv);
        hIMGdiv.classList.add("hIMG")
        const oysters = new Image();
        oysters.src = homeIMG;
        hIMGdiv.appendChild(oysters);

        const restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("bio")
        content.appendChild(restaurantDiv);

        const restaurantBio = document.createElement("h2");
        restaurantDiv.appendChild(restaurantBio);
        restaurantBio.textContent =
        "ORANGE COUNTY’S GATHERING SPOT FOR FRESH, FLAVORFUL SURF & TURF."
        restaurantBio.classList.add("restaurantBio")
        
        return hIMGdiv;
    }
    
    return {
        createHomePage
    }

})();

export const menuPage = (() =>{
    class chilledSeafood {
        constructor(title, halfPrice, dozenPrice, half, dozen) {
            this.title = title;
            this.halfPrice = halfPrice;
            this.dozenPrice = dozenPrice;
            this.half = half;
            this.dozen = dozen;
        }    
    }
    class alcohol {
        constructor(title, smPrice, lgPrice, smSize, lgSize) {
            this.title = title;
            this.smSize = smSize;
            this.lgSize = lgSize;
            this.smPrice = smPrice;
            this.lgPrice = lgPrice;
        }  
    }         

    let oystersList = [];
    const gulfOysters = new chilledSeafood 
    ("Gulf Oysters", "$16.99", "$24.99", "1/2 Dozen","Dozen")
    oystersList.push(gulfOysters);

    const atlanticOysters = new chilledSeafood 
    ("Atlantic Oysters", "$18.99", "$25.99", "1/2 Dozen","Dozen")
    oystersList.push(atlanticOysters);

    let clamsList = [];
    const softClams = new chilledSeafood 
    ("Soft-Shell Clams", "$11.99", "$19.99", "1/2 Dozen", "Dozen")
    clamsList.push(softClams);

    const mahoganyClams = new chilledSeafood 
    ("Mahogany Clams", "$14.99", "$22.99", "1/2 Dozen", "Dozen")
    clamsList.push(mahoganyClams);


    console.log(oystersList);

    function createMenu(){
        const oystersHeaderContainer= document.createElement("div")
        content.appendChild(oystersHeaderContainer);
        oystersHeaderContainer.classList.add("headerDivs")

        const oystersHeader= document.createElement("h2")
        oystersHeaderContainer.appendChild(oystersHeader);
        oystersHeader.classList.add("headerTitles")
        oystersHeader.textContent="Oysters"

        const oystersListDiv = document.createElement("div")
        content.appendChild(oystersListDiv)
        oystersListDiv.classList.add("oysters")

        const clamsHeaderContainer= document.createElement("div")
        content.appendChild(clamsHeaderContainer);
        clamsHeaderContainer.classList.add("headerDivs")

        const clamsHeader= document.createElement("h2")
        clamsHeaderContainer.appendChild(clamsHeader);
        clamsHeader.classList.add("headerTitles")
        clamsHeader.textContent="Clams"

        const clamsListDiv = document.createElement("div")
        content.appendChild(clamsListDiv)
        clamsListDiv.classList.add("clams");

        let draftList = [];
        const budLight = new alcohol ("Bud Light","$7.00","$10.00","16 Oz","23 Oz")
        draftList.push(budLight);

        const stella = new alcohol ("Stella Artois","$9.00","$11.00","16 Oz","23 Oz")
        draftList.push(stella);

        const kirin = new alcohol ("Kirin Light","$7.00","$10.00","16 Oz","23 Oz")
        draftList.push(kirin);

        const guinness = new alcohol ("Guinness","$7.00","$10.00","16 Oz","23 Oz")
        draftList.push(guinness);

        const laAle = new alcohol ("LA Ale Works Lunar Kitten IPA","$9.00","$11.00","16 Oz","23 Oz")
        draftList.push(laAle);

        const draftHeaderContainer= document.createElement("div")
        content.appendChild(draftHeaderContainer);
        draftHeaderContainer.classList.add("headerDivs")

        const draftHeader= document.createElement("h2")
        draftHeaderContainer.appendChild(draftHeader);
        draftHeader.classList.add("headerTitles")
        draftHeader.textContent="Draft"
        
        const draftListDiv = document.createElement("div")
        content.appendChild(draftListDiv)
        draftListDiv.classList.add("draft")

        let draftContainer= document.createElement("div");
        draftContainer.classList.add("draftContainer");
        draftListDiv.appendChild(draftContainer);

        let wineList =[];
        const moscato = new alcohol 
        ("Moscato | Jacob's Creek | Australia","$8.00","$32.00","Glass","Bottle")
        wineList.push(moscato)

        const sacha = new alcohol
        ("Rosé | Sacha Lichine The Pale | Provence","$14.00","$50.00","Glass","Bottle")
        wineList.push(sacha)

        const ziobaffa = new alcohol
        ("Pinot Grigio | Ziobaffa | Italy","$14.00","$50.00","Glass","Bottle")
        wineList.push(ziobaffa)

        const villa = new alcohol
        ("Sauvignon Blanc | La Villaudiére | France","$14.00","$50.00","Glass","Bottle")
        wineList.push(villa)

        const wineHeaderContainer= document.createElement("div")
        content.appendChild(wineHeaderContainer);
        wineHeaderContainer.classList.add("headerDivs")

        const wineHeader= document.createElement("h2")
        wineHeaderContainer.appendChild(wineHeader);
        wineHeader.classList.add("headerTitles")
        wineHeader.textContent="Wine"

        const wineListDiv = document.createElement("div")
        content.appendChild(wineListDiv)
        wineListDiv.classList.add("wine")

        let wineContainer= document.createElement("div");
        wineContainer.classList.add("wineContainer");
        wineListDiv.appendChild(wineContainer);

        
        for(let i = 0; i < oystersList.length ; i++) {
            let oystersTitleDiv = document.createElement("div");
            oystersTitleDiv.classList.add("oystersTitle");
            oystersListDiv.appendChild(oystersTitleDiv);
            oystersTitleDiv.textContent= oystersList[i].title;

            let oystersHalf = document.createElement("div");
            oystersTitleDiv.appendChild(oystersHalf);
            oystersHalf.classList.add("half-item");

            let oystersDozen = document.createElement("div");
            oystersTitleDiv.appendChild(oystersDozen);
            oystersDozen.classList.add("dozen-item");

            let oystersHalfSizeDiv = document.createElement("div");
            oystersHalfSizeDiv.classList.add("oystersHalf");
            oystersHalf.appendChild(oystersHalfSizeDiv);
            oystersHalfSizeDiv.textContent= oystersList[i].half;

            let oystersHalfPriceDiv = document.createElement("div");
            oystersHalfPriceDiv.classList.add("oystersHalfPrice");
            oystersHalf.appendChild(oystersHalfPriceDiv);
            oystersHalfPriceDiv.textContent= oystersList[i].halfPrice;

            let oystersDozenDiv = document.createElement("div");
            oystersDozenDiv.classList.add("oystersDozen");
            oystersDozen.appendChild(oystersDozenDiv);
            oystersDozenDiv.textContent= oystersList[i].dozen;

            let oystersDozenPriceDiv = document.createElement("div");
            oystersDozenPriceDiv.classList.add("oystersDozenPrice");
            oystersDozen.appendChild(oystersDozenPriceDiv);
            oystersDozenPriceDiv.textContent= oystersList[i].dozenPrice;

        }
        for(let i = 0; i < clamsList.length ; i++) {
            let clamsTitleDiv = document.createElement("div");
            clamsTitleDiv.classList.add("clamsTitle");
            clamsListDiv.appendChild(clamsTitleDiv);
            clamsTitleDiv.textContent= clamsList[i].title;

            let clamsHalf = document.createElement("div");
            clamsTitleDiv.appendChild(clamsHalf);
            clamsHalf.classList.add("half-item");

            let clamsDozen = document.createElement("div");
            clamsTitleDiv.appendChild(clamsDozen);
            clamsDozen.classList.add("dozen-item");

            let clamsHalfDiv = document.createElement("div");
            clamsHalfDiv.classList.add("clamsHalf");
            clamsHalf.appendChild(clamsHalfDiv);
            clamsHalfDiv.textContent= clamsList[i].half;

            let clamsHalfPriceDiv = document.createElement("div");
            clamsHalfPriceDiv.classList.add("clamsHalfPrice");
            clamsHalf.appendChild(clamsHalfPriceDiv);
            clamsHalfPriceDiv.textContent= clamsList[i].halfPrice;

            let clamsDozenDiv = document.createElement("div");
            clamsDozenDiv.classList.add("clamsDozen");
            clamsDozen.appendChild(clamsDozenDiv);
            clamsDozenDiv.textContent= clamsList[i].dozen;

            let clamsDozenPriceDiv = document.createElement("div");
            clamsDozenPriceDiv.classList.add("clamsDozenPrice");
            clamsDozen.appendChild(clamsDozenPriceDiv);
            clamsDozenPriceDiv.textContent= clamsList[i].dozenPrice;

        }


        for(let i = 0; i < draftList.length ; i++) {
            let draftTitleDiv = document.createElement("div");
            draftTitleDiv.classList.add("draftTitle");
            draftContainer.appendChild(draftTitleDiv);
            draftTitleDiv.textContent= draftList[i].title;

            let draftSm = document.createElement("div");
            draftTitleDiv.appendChild(draftSm);
            draftSm.classList.add("s16oz-item");

            let draftLg = document.createElement("div");
            draftTitleDiv.appendChild(draftLg);
            draftLg.classList.add("l23oz-item");

            let draftSmSizeDiv = document.createElement("div");
            draftSmSizeDiv.classList.add("draftSmSize");
            draftSm.appendChild(draftSmSizeDiv);
            draftSmSizeDiv.textContent= draftList[i].smSize;

            let draftSmPriceDiv = document.createElement("div");
            draftSmPriceDiv.classList.add("draftSmPrice");
            draftSm.appendChild(draftSmPriceDiv);
            draftSmPriceDiv.textContent= draftList[i].smPrice;

            let draftLgSizeDiv = document.createElement("div");
            draftLgSizeDiv.classList.add("draftLgSize");
            draftLg.appendChild(draftLgSizeDiv);
            draftLgSizeDiv.textContent= draftList[i].lgSize;

            let draftlgPriceDiv = document.createElement("div");
            draftlgPriceDiv.classList.add("draftLgPrice");
            draftLg.appendChild(draftlgPriceDiv);
            draftlgPriceDiv.textContent= draftList[i].lgPrice;
        }

        for(let i = 0; i < wineList.length ; i++) {
            let wineTitleDiv = document.createElement("div");
            wineTitleDiv.classList.add("wineTitle");
            wineContainer.appendChild(wineTitleDiv);
            wineTitleDiv.textContent= wineList[i].title;

            let wineGlass = document.createElement("div");
            wineTitleDiv.appendChild(wineGlass);
            wineGlass.classList.add("glass-item");

            let wineBottle = document.createElement("div");
            wineTitleDiv.appendChild(wineBottle);
            wineBottle.classList.add("bottle-item");

            let wineGlassDiv = document.createElement("div");
            wineGlassDiv.classList.add("wineGlass");
            wineGlass.appendChild(wineGlassDiv);
            wineGlassDiv.textContent= wineList[i].smSize;

            let wineGlassPriceDiv = document.createElement("div");
            wineGlassPriceDiv.classList.add("wineGlassPrice");
            wineGlass.appendChild(wineGlassPriceDiv);
            wineGlassPriceDiv.textContent= wineList[i].smPrice;

            let wineBottleDiv = document.createElement("div");
            wineBottleDiv.classList.add("wineBottleSize");
            wineBottle.appendChild(wineBottleDiv);
            wineBottleDiv.textContent= wineList[i].lgSize;

            let wineBottlePriceDiv = document.createElement("div");
            wineBottlePriceDiv.classList.add("wineBottlePrice");
            wineBottle.appendChild(wineBottlePriceDiv);
            wineBottlePriceDiv.textContent= wineList[i].lgPrice;

        } 
}

return{
    createMenu
}
})();

export const contactPage = (()=>{
    class contactPersonnel {
        constructor(name, position, phoneNumber, email) {
            this.name = name;
            this.position = position;
            this.phoneNumber = phoneNumber;
            this.email = email;
        }    
    }

    let contactList =[];
    const barry = new contactPersonnel("Barry Bucks","Owner","(854)827-7362","barrytheowner@joonspoon.com")
    contactList.push(barry);

    const karen = new contactPersonnel("Karen Ruins","Manager","(911)122-3828","karenthemanager@joonspoon.com")
    contactList.push(karen);

    const judy = new contactPersonnel("Judy Sits","Hostess","(412)239-2493","judythehostess@joonspoon.com")
    contactList.push(judy);

    function createContacts(){
        for(let i = 0; i < contactList.length ; i++) {
            const employeeContainer= document.createElement("div")
            content.appendChild(employeeContainer);
            employeeContainer.classList.add("employeeDivs")
    
            const nameDiv= document.createElement("h2")
            employeeContainer.appendChild(nameDiv);
            nameDiv.classList.add("name")
            nameDiv.textContent=contactList[i].name;

            const positionDiv= document.createElement("div")
            employeeContainer.appendChild(positionDiv);
            positionDiv.classList.add("position")
            positionDiv.textContent=contactList[i].position;
            
            const phoneNumberDiv= document.createElement("div")
            employeeContainer.appendChild(phoneNumberDiv);
            phoneNumberDiv.classList.add("phoneNumber")
            phoneNumberDiv.textContent=contactList[i].phoneNumber;

            const emailDiv= document.createElement("div")
            employeeContainer.appendChild(emailDiv);
            emailDiv.classList.add("email")
            emailDiv.textContent=contactList[i].email;
    
        }

    } 
    return{
        createContacts
    }
})();