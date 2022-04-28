const beerCardComponent = function (brand, brewery, flavour){ // a  függvénnyel létrehozzuk azt a HTML kódot, amit majd szeretnénk beilleszteni a root id-jű div-be
    return ` 
        <div class="card">
            <h1 class="beerBrand">${brand}</h1>  
            <h2 class="beerBrewery">${brewery}</h2>
            <p class="beerFlavour">${flavour}</p>
        </div>
    `
} //itt a function paramétereit bárhogy elnevezhetjük. Ha nem lenne függvény, hanem sima string, akkor nem tudnánk beletenni változó értékeket paraméterként

const loadEvent = function (){
    const rootElement = document.getElementById("root"); //ennek a változónak az értéke nem fog változni, ezért const
    let beerDiv = "" // a változó értéke változni fog, mivel mindig hozzáadunk egy új div-et a következő sör adataival
   
    for (let beerType of beers.cards) {      // végigmegy a cards tömbön, és annyiszor csinálja a függvény utasításait, ahány eleme van a beer.cards-nak 
        
        beerDiv += beerCardComponent(beerType.title, beerType.sub, beerType.text) //hozzáadunk a beerDiv értékéhez mindig egy újabb div-et ami a fenti függvényünk alapján gyártódik le 
    }
        
    //console.log(beerDiv); // ez csak FYI
    rootElement.insertAdjacentHTML("beforeend", beerDiv) //argumentumok: (position, egy olyan string amit html-é tud konvertálni)
        
}


window.addEventListener("load", loadEvent) //ez minden egyes js kódban benne kell legyen

//console.log(window) // ez csak FYI
//console.log(beers.cards)
//console.log(beers.logo)