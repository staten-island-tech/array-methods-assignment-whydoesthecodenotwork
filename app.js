const fruits = [
    { name: "apple", cost: 0.64, weight: 193, appearance: ["🍎", "🍏"] },
    { name: "banana", cost: 0.27, weight: 101, appearance: ["🍌", "🌙"] },
    { name: "coconut", cost: 2.64, weight: 397, appearance: ["🥥", "🟤"] },
    { name: "dragon fruit", cost: 4.47, weight: 254, appearance: ["🐲", "🐉"] },
];

function print(element) {
    console.log(element.name);

    element.appearance.forEach((emoji) => {
        console.log(emoji);
    });
}

fruits.forEach(print);

const cheapFruits = fruits.filter((fruit) => fruit.cost < 1);

cheapFruitNames = [];
cheapFruits.forEach((fruit) => cheapFruitNames.push(fruit.name));
/*fruit doesn't even look like a real word anymore*/

console.log(
    "Array of fruits that cost less than 1 dollar each: " + cheapFruitNames
);
