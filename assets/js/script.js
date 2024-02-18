let balans = document.getElementById("balans");
let gelir = document.getElementById("plus");
let xerc = document.getElementById("minus");
let input1 = document.getElementById("firstInp");
let input2 = document.getElementById("secondInp");
let button = document.getElementById("addBtn");
let siyahi = document.getElementById("siyahi");
let balansMebleg = 0;

addBtn.addEventListener("click", function () {
  let input1Value = input1.value;
  let input2Value = input2.value;
  balansMebleg += parseInt(input2Value);
  balans.innerText = balansMebleg;

  siyahi.innerHTML += "<ul>" + value + "</ul>";
});
