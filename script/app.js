document.addEventListener("DOMContentLoaded", function () {

  function displayDiff() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML);
    let secondNum = Number(document.getElementById('secondNum').innerHTML);
    let diffTotal = firstNum - secondNum; // Corrected the variable name
    document.getElementById("diffanswer").innerHTML = ${firstNum} - ${secondNum}, equals to ${diffTotal};
  }
  
  function displayMult() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let product = firstNum * secondNum;
  document.getElementById("productanswer").innerHTML = ${firstNum} * ${secondNum}, equals to ${product};
  }

  document.getElementById('MultButton').addEventListener("click", displayMult);
  document.getElementById('DiffButton').addEventListener("click", displayDiff);
});
