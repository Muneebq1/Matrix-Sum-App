// function calculation() {

//     let matrix1 = [];
//     let matrix2 = [];

//     for (let i = 0; i < input1; i++) {
//         for (let j = 0; j < input2; j++) {
//             console.log("running");
//             if (matrix1[i] === undefined) matrix1[i] = []
//             if (matrix2[i] === undefined) matrix2[i] = []

//             matrix1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
//             matrix2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
//         }
//     }

//     let operators = document.querySelector(`#operators`).value ;
    

//     let result = "" ;

// if (operators === `+` ) {

//          result = sumMatrix(matrix1, matrix2);                
   
// }

// if  (operators === `-`) {
        
//          result = subMatrix(matrix1, matrix2) ;
   
// }

// if (operators === `X`) {
    
//      result = multiplyMatrix(matrix1, matrix2) ;
//     }
//         for (let i = 0; i < result.length; i++) {
//         for (let j = 0; j < result[i].length; j++) {
//             document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
//         }
//     }

// }


// function sumMatrix(matrix1, matrix2) {
//     let result = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         result[i] = [];
//         for (let j = 0; j < matrix1[i].length; j++) {
//             result[i][j] = matrix1[i][j] + matrix2[i][j];
//         }
//     }
//     return result;
// }

// function subMatrix(matrix1, matrix2) {
//     let result = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         result[i] = [];
//         for (let j = 0; j < matrix1[i].length; j++) {
//             result[i][j] = matrix1[i][j] - matrix2[i][j];
//         }
//     }
//     return result;
// }

// function multiplyMatrix(matrix1, matrix2) {
// var aNumRows = matrix1.length, aNumCols = matrix1[0].length,
// bNumRows = matrix2.length, bNumCols = matrix2[0].length,
// result = new Array(aNumRows);  // initialize array of rows
// for (var r = 0; r < aNumRows; ++r) {
// result[r] = new Array(bNumCols); // initialize the current row
// for (var c = 0; c < bNumCols; ++c) {
//     result[r][c] = 0;             // initialize the current cell
//     for (var i = 0; i < aNumCols; ++i) {
//         result[r][c] += matrix1[r][i] * matrix2[i][c];
//     }
// }
// }
// return result;
// }