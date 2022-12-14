// //1 Сравнение символов в строке//

const arr = ["asd", "afffd", "cc", "kk"]
const compareStrings = (arr) => {
  return arr
    .map((currentString, index) => {
      const nextString = arr[index + 1];

      if (!nextString) {
        return;
      }

      const isFirstCharMatch = currentString[0] === nextString[0];
      const isLastCharMatch = currentString.slice(-1) === nextString.slice(-1);

      return isFirstCharMatch && isLastCharMatch;
    })
    .slice(0, -1)
}
console.log(compareStrings(arr))
// //Матрица//

const matrix = [
  [1, 2, 4, 6, 8, 7, 3, 9],
  [3, 5, 8, 1, 2, 7, 4, 9],
  [5, 7, 3, 9, 8, 4, 2, 1]
]

function checkMatrix(matrix) {
  const result = [];
  let curIndex = 2;
  let first = 0;
  let second = 3;

  while (curIndex < matrix[0].length) {
    result.push(
      new Set(
        matrix.reduce((acc, cur) => acc.concat(cur.slice(first, second)), [])
      ).size === 9
    );
    ++curIndex;
    ++first;
    ++second;

  }

  return result;
}

console.log(checkMatrix(matrix))