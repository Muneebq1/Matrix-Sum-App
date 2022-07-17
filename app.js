let row = "";
let col = "";

function start() {
    row = +document.querySelector("#row_size").value;
    col = +document.querySelector("#col_size").value;

    let input1 = document.querySelector("#input_1");
    let input2 = document.querySelector("#input_2");
    let mResult = document.querySelector("#mResult");

    input1.innerHTML = "";
    input2.innerHTML = "";
    mResult.innerHTML = "";

    if (row !== col) {
        alert("Please enter the same number for both inputs");
        return;
    }
    if (isNaN(row) || isNaN(col)) {
        alert("Please enter a number");
        return;
    }
    if (row < 2 || col < 2) {
        alert("Please enter a number greater than 1");
        return;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            input1.innerHTML += `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0">`;

            input2.innerHTML += `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0">`;

            mResult.innerHTML += `<input type="number" disabled required min="0" max="100" id="mResult-${i}-${j}" value="0">`;
        }
        input1.innerHTML += `<br>`;
        input2.innerHTML += `<br>`;
        mResult.innerHTML += `<br>`;
        


    }
    document.querySelector("#form2").classList.remove("hidden");

}


// function sum() {

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             console.log("running");

//             document.querySelector(`#mResult-${i}-${j}`).value =
//                 +document.querySelector(`#m1-${i}-${j}`).value
//                 +
//                 +document.querySelector(`#m2-${i}-${j}`).value;
//         }
//     }



function sum() {

    let sum1 = [];
    let sum2 = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

<<<<<<< HEAD
                sum1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
                sum2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
            }
        }
        let select = document.getElementById('drop_down')
        let value = select.options[select.selectedIndex].value

        let result // Initiating global variable for Sum, Sub & Multiplication Matrices 

        // Initiating conditional statement for Sum, Sub & Multiplication
            if (value == "+") {
                result = sumMatrix(sum1, sum2) // Condition for Addition
            }
            else if (value == "-") {
                result = subtractMatrix(sum1, sum2) // Condition for Subtraction 
            }
            else if (value == "x") {
                result = mulMatrix(sum1, sum2) // Condition for Multiplication
            }
          
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
            }
=======
            if (sum1[i] === undefined) sum1[i] = []
            if (sum2[i] === undefined) sum2[i] = []

            sum1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            sum2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
>>>>>>> daadadf78c573e9ecb6cce4a44e0592a35010ec1
        }
    }

    let result = sumMatrix(sum1, sum2);

<<<<<<< HEAD
    function sumMatrix(sum1, sum2) {
        let result = [];
        for (let i = 0; i < sum1.length; i++) {
            result[i] = [];
            for (let j = 0; j < sum1[i].length; j++) {
                result[i][j] = sum1[i][j] + sum2[i][j];
            }
        }
        return result;
    }
    // function subtract() {
    //     let sub1 = []
    //     let sub2 = []

    //     for (let i = 0; i < row; i++) {
    //         for (let j = 0; j < col; j++) {
                
    //             if (sub1[i] === undefined) sub1[i] = []
    //             if (sub2[i] === undefined) sub2[i] = []

    //             sub1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
    //             sub2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
    //         }
    //     }
    //     let result = subtractMatrix(sub1, sub2)
    //     for (let i = 0; i < result.length; i++) {
    //         for (let j = 0; j < result[i].length; j++) {
    //             document.querySelector(`#mResult-${i}-${j}`).value = result[i][j]
    //         }
    //     }
    // }
    function subtractMatrix(sum1, sum2) {
        let result = []
        for (let i = 0; i < sum1.length; i++) {
            result[i] = []
            for (let j = 0; j < sum1[i].length; j++) {
                result[i][j] = sum1[i][j] - sum2[i][j]
            }
        }
        return result
    }
    function mulMatrix(sum1, sum2) {
        let aNumRows = sum1.length, aNumCols = sum1[0].length,
            bNumRows = sum2.length, bNumCols = sum2[0].length,
            result = new Array(aNumRows);  // initialize array of rows
        for (let r = 0; r < aNumRows; ++r) {
            result[r] = new Array(bNumCols); // initialize the current row
            for (let c = 0; c < bNumCols; ++c) {
                result[r][c] = 0             // initialize the current cell
                for (let i = 0; i < aNumCols; ++i) {
                    result[r][c] += sum1[r][i] * sum2[i][c] // Realtime Multiplication between Matrices
                }
            }
=======

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
        }
    }
}


function sumMatrix(sum1, sum2) {
    let result = [];
    for (let i = 0; i < sum1.length; i++) {
        result[i] = [];
        for (let j = 0; j < sum1[i].length; j++) {
            result[i][j] = sum1[i][j] + sum2[i][j];
        }
    }
    return result;
}
function subtract() {
    let sub1 = []
    let sub2 = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            if (sub1[i] === undefined) sub1[i] = []
            if (sub2[i] === undefined) sub2[i] = []

            sub1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            sub2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
        }
    }
    let result = subtractMatrix(sub1, sub2)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#mResult-${i}-${j}`).value = result[i][j]
        }
    }
}
function subtractMatrix(sub1, sub2) {
    let result = []
    for (let i = 0; i < sub1.length; i++) {
        result[i] = []
        for (let j = 0; j < sub1[i].length; j++) {
            result[i][j] = sub1[i][j] - sub2[i][j]
        }
    }
    return result
}

function multiplication() {

    let mul1 = [];
    let mul2 = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            if (mul1[i] === undefined) mul1[i] = []
            if (mul2[i] === undefined) mul2[i] = []

            mul1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            mul2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
>>>>>>> daadadf78c573e9ecb6cce4a44e0592a35010ec1
        }
    }

    let result = multiplicationMatrix(mul1, mul2);


    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#mResult-${i}-${j}`).value = result[i][j];
        }
    }
}


function multiplicationMatrix(mul1, mul2) {
    let result = [];
    for (let i = 0; i < mul1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mul1[i].length; j++) {
            result[i][j] = mul1[i][j] * mul2[i][j];
        }
    }
    return result;
}

