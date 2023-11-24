////////// Insérez ici votre code  ///////////////////////

animals.sort().reverse();

function compareAnimalLettre(animal, lettre){
    return animal[0].toLowerCase() == lettre;
}


for(var i = 0; i < animals.length; i++){
    if(compareAnimalLettre(animals[i], "e") || compareAnimalLettre(animals[i], "m")){
        //console.log("M ou E détecté. Je tue ", animals[i],);
        animals.splice(i, 1);
        i--;
    }
    if(animals[i].search(/l{2}/)!=-1){
        //console.log("Double L détecté. Je tue ", animals[i],);
        animals.splice(i, 1);
        i--;
    }
}

function searchAnimal(pattern){
    let tabRetour = [];
    let regx = new RegExp("/pattern/", "g");
    for(var i = 0; i < animals.length; i++){
        if(animals[i].search(pattern) != -1){
            tabRetour.push(animals[i]);
        }
    }
    return tabRetour;
}

let p = "at";
console.log(searchAnimal(p));


///////////////////////////////////////////////