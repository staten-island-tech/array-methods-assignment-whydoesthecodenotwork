const fruits = [
    { name: "apple", cost: 0.64, weight: 193, appearance: ["🍎", "🍏"] },
    { name: "banana", cost: 0.27, weight: 101, appearance: ["🍌", "🌙"] },
    { name: "coconut", cost: 2.64, weight: 397, appearance: ["🥥", "🟤"] },
    { name: "dragon fruit", cost: 4.47, weight: 254, appearance: ["🐲", "🐉"] },
];

const cheapFruits = [];

function print(element) {
    console.log(element.name);

    element.appearance.forEach((fruit) => {
        console.log(fruit);
    });

    if (filterArray(element)) {
        cheapFruits.push(element.name);
    }
}

function filterArray(array) {
    return array.cost < 1;
}

fruits.forEach(print);
console.log(
    "Array of fruits that cost less than 1 dollar each: " + cheapFruits
);
