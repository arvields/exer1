function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

let total = firstNum - secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;

document.getElementById('sumButton').addEventListener("click", displayProduct);
document.getElementById('diffButton').addEventListener("click", displayDiff);
