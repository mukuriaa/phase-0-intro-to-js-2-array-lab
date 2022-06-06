// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
 cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Milo","Otis")
}

function destructivelyRemoveFirstCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    var newList = [...cats, name]; 
    return newList;
}

function prependCat(name){
    var newList = [name, ...cats]; 
    return newList;
}

function removeLastCat(){
    var newList = cats.slice(0,cats.length-1);
    return newList
}

function removeFirstCat(){
    var newList = cats.slice(1);
    return newList
}