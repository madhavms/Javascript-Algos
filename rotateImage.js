var rotateImage = function (matrix) {
  let temp_matrix = [];
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    temp_matrix[i] = [];
    for (let j = len - 1; j >= 0; j--) {
      temp_matrix[i].push(matrix[j][i]);
    }
  }
  for (let i = 0; i < len; i++) {
    matrix[i] = temp_matrix[i];
  }
  return temp_matrix;
};

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
