function sumOfRow(rowArr, rowIndex) {
    return new Promise((resolve, reject) => {
        if (rowArr.length > rowIndex) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < rowArr[rowIndex].length; i++) {
                    sum += rowArr[rowIndex][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject(`Row index ${rowIndex} out of bounds. Must be between 0 and ${rowArr.length}.`);
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rowSumPromises = [];

for (let i = 0; i < array2D.length; i++) {
    rowSumPromises.push(sumOfRow(array2D, i));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach((rowSum => {
            sum += rowSum;
        }));
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error Message: ${error}`));