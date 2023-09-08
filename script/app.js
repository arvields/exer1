function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("productAnswer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

let total = firstNum - secondNum;
  document.getElementById("diffAnswer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;

document.getElementById('productButton').addEventListener("click", displayProduct);
document.getElementById('diffButton').addEventListener("click", displayDiff);
