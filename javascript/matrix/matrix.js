export class Matrix {
  constructor(matrixString) {
    this.matrix_2D = this.parse(matrixString)
  }

  parse(matrixString) {
    return matrixString.split("\n").map(row => row.split(' ').map(value => Number(value)))
  }

  transpose(matrix) {
    return matrix[0].map((_, index) => matrix.map(row => row[index]))
  }

  get rows() {
    return this.matrix_2D
  }

  get columns() {
    return this.transpose(this.rows)
  }
}
