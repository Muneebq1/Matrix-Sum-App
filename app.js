function start() {
    let row = Number(document.querySelector("#row_size").value);
    let col = Number(document.querySelector("#col_size").value);

    let input1 = document.querySelector("#input_1");
    let input2 = document.querySelector("#input_2");

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            input1.innerHTML += `<input type="number" class="input_boxes" id="matrix_value_${i}${j}" value="0" style="width: 30px;" >`;
        }
        input1.innerHTML += "<br>";

    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            input2.innerHTML += `<input type="number" class="input_boxes" id="matrix_value2_${i}${j}" value="0" style="width: 30px;" >`;
        }
        input2.innerHTML += "<br>";
    }
}
function sum() {
    let row = Number(document.querySelector("#row_size").value);
    let col = Number(document.querySelector("#col_size").value);

    let result1 = "";
    result1 = document.querySelector("#result");

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let value1 = Number(document.querySelector(`#matrix_value_${i}${j}`).value);
            let value2 = Number(document.querySelector(`#matrix_value2_${i}${j}`).value);
            let result = value1 + value2;

            console.log(result);

            result1.innerHTML += result;
        }
        result1.innerHTML += "<br>";
    }
    
}