function start() {
    let row = Number(document.querySelector("#row_size").value);
    let col = Number(document.querySelector("#col_size").value);

    let input1 = document.querySelector("#input_1");
    let input2 = document.querySelector("#input_2");

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
            input1.innerHTML += `<input type="number" required min="0" max="100" id="matrix_value1_${i}${j}" value="0">`;
            
            input2.innerHTML += `<input type="number" required min="0" max="100" id="matrix_value2_${i}${j}" value="0">`;

            result.innerHTML += `<input type="number" disabled required min="0" max="100" id="matrix_Result-${i}-${j}" value="0">`;
        }
        input1.innerHTML += `<br>`;
        input2.innerHTML += `<br>`;
        result.innerHTML += `<br>`;
    }
    document.querySelector("#form2").classList.remove("hidden");
}

function sum() { 
    let value1 = Number(document.querySelector(`#matrix_value1_${i}${j}`).value);
    let value2 = Number(document.querySelector(`#matrix_value2_${i}${j}`).value);
    let value3 = Number(document.querySelector(`#matrix_Result-${i}${j}`).value);
    result = document.querySelector("#result");
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
           
            value3 = value1 + value2;
           
            result.innerHTML += value3;
        }

    }

}