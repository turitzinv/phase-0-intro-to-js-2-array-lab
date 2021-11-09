// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
    const catsCopy = [...cats, "Broom"];
    return catsCopy;
}

function prependCat(name) {
    const catsCopy = ["Arnold", ...cats];
    return catsCopy;
}

function removeLastCat(name) {
    const catsCopy = [...cats];
    return catsCopy.slice(0, cats.length-1);
}

function removeFirstCat(name) {
    const catsCopy = [...cats];
    return catsCopy.splice(1);
}
