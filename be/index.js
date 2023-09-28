function reverseString(string) {
  let reverseTeks = "";
  let number = "";
  let allNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (let i = string.length - 1; i >= 0; i--) {
    if (allNumber.includes(Number(string[i]))) {
      number += string[i];
    } else {
      reverseTeks += string[i];
    }
  }

  return reverseTeks + number;
}

console.log(reverseString("NEGIE1"));

function getLongest(string) {
  let longest = "";
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest.length + " character";
}

console.log(getLongest("Saya sangat senang mengerjakan soal algoritma"));

function equalDataArray(array1, array2) {
  let result = [];
  for (let i = 0; i < array2.length; i++) {
    let count = 0;
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(equalDataArray(INPUT, QUERY)); // [1, 0, 2]

function diagonalArrayReduction(array) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < array.length; i++) {
    diagonal1 += array[i][i];
    diagonal2 += array[i][array.length - 1 - i];
  }
  return diagonal1 - diagonal2;
}

const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalArrayReduction(Matrix)); // 3
