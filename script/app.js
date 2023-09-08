document.addEventListener("DOMContentLoaded", function () {
  // Your code here, including the displaySum and displayDiff functions
  function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML);
    let secondNum = Number(document.getElementById('secondNum').innerHTML);
    let total = firstNum + secondNum;
    document.getElementById("sumanswer").innerHTML = `${firstNum} + ${secondNum}, equals to ${total}`;
  }

  function displayDiff() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML);
    let secondNum = Number(document.getElementById('secondNum').innerHTML);
    let diffTotal = firstNum - secondNum; // Corrected the variable name
    document.getElementById("diffanswer").innerHTML = `${firstNum} - ${secondNum}, equals to ${diffTotal}`;
  }
  
  function displayMult() {
  console.log("Multiply button clicked"); // Add this line to check if the function is called
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let product = firstNum * secondNum;
  document.getElementById("productanswer").innerHTML = `${firstNum} * ${secondNum}, equals to ${product}`;
}

  document.getElementById('MultButton').addEventListener("click", displayMult);
  document.getElementById('SumButton').addEventListener("click", displaySum);
  document.getElementById('DiffButton').addEventListener("click", displayDiff);
});
