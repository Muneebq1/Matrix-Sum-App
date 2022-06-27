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
               
                if (sum1[i] === undefined) sum1[i] = []
                if (sum2[i] === undefined) sum2[i] = []

                sum1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
                sum2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
            }
        }

        let result = sumMatrix(sum1, sum2);


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



    