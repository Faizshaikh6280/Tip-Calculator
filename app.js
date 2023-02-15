const tipAmout = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-per-person");
const getBillAmout = document.querySelector("#bill-amount");
const getNumberOfPeople = document.querySelector("#number-of-people");
const btnCalculate = document.querySelector("#calculate");
const tips = document.getElementsByName("tip");
let tipValue, people, amount;

// setting default values
tips.forEach((tip) => {
  if (tip.checked) tipValue = +tip.value.replace("%", "");
});
people = +getNumberOfPeople.value;
amount = +getBillAmout.value;

tips.forEach((tip) => {
  tip.addEventListener("change", function (e) {
    tipValue = +e.target.value.replace("%", "");
  });
});
// Getting values from UI
[getBillAmout, getNumberOfPeople].forEach((el) => {
  el.addEventListener("change", function (e) {
    if (e.target.id === "number-of-people") people = +e.target.value;

    if (e.target.id === "bill-amount") amount = +e.target.value;
  });
});
//
btnCalculate.addEventListener("click", function () {
  let tip = +((amount / 100) * tipValue);
  //   Displaying Tip amout
  tipAmout.textContent = `${tip.toFixed(2)}`;
  // Displaying Tip amout Per Person
  totalPerPerson.textContent = `${((amount + tip) / people).toFixed(2)}`;
});
