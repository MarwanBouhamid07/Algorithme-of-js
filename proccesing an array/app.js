let array = [1, 2, 3, 2, 4, 5, 6, 2];
let duplicates = [];
let count;

for (let index = 0; index < array.length; index++) {
    let def = array[index];
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i + index] === def){
                duplicates[duplicates.length] = array[i + index]
        }
        
    }

}

console.log(duplicates);

