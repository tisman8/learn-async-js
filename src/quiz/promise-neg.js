function negativesPerRow(rowArr, rowIndex) {
    return new Promise((resolve, reject) => {
        if (rowArr.length > rowIndex) {
            setTimeout(() => {
                for (let i = 0; i < rowArr[rowIndex].length; i++) {
                    if (rowArr[rowIndex][i] < 0) {
                        resolve(true);
                    }
                }
                resolve(false);
            }, 0);
        } else {
            reject(`Row index ${rowIndex} out of bounds. Must be between 0 and ${rowArr.length}.`);
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rowNegativePromises = [];

for (let i = 0; i < array2D.length; i++) {
    rowNegativePromises.push(negativesPerRow(array2D, i));
}

Promise.any(rowNegativePromises)
    .then((results) => {
        console.log(`Has negatives: = ${results}`);
    })
    .catch((error) => console.log(`Error Message: ${error}`));