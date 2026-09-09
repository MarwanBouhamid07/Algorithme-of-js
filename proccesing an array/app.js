let array = [1, 2, 3, 2, 4, 5, 1, 6, 2];
let duplicates = [];

for (let value of array) {
    if (array.indexOf(value) !== array.lastIndexOf(value) && !duplicates.includes(value)) {
        duplicates.push(value);
    }
}

console.log(duplicates); // [1, 2]