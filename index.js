// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name = "Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift(name = "Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyOfCats= [...cats,name = "Broom"];
    return copyOfCats;
  }

function prependCat(name){
    const copyOfCats= [name = "Arnold", ...cats];
    return copyOfCats;
  }

function removeLastCat(){
    const copyOfCats= cats.slice(0, cats.length - 1);
    return copyOfCats;
  }

  function removeFirstCat(){
    const copyOfCats= cats.slice(1);
    return copyOfCats;
  }