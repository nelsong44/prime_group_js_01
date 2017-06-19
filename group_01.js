var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
var newArray = [];
//function to push each array of employee information (name, bonus %, adjusted income (annual + bonus), total bonus rounded to nearest $) into newArray[]
function bonusCalc(employees) {
  for(i = 0; i < employees.length; i++) {
    console.log(employees[i]);
    var currentEmployee = employees[i];
    var totalBonusPercent = baseBonus(currentEmployee) + timeBonus(currentEmployee) + annualBonus(currentEmployee);
    if(totalBonusPercent > 0.13) {
      totalBonusPercent = 0.13;
    }
    else if (totalBonusPercent < 0) {
      totalBonusPercent = 0;
    }// end if
    console.log(totalBonusPercent);
    var yearlyIncome = currentEmployee[2];
    var totalBonus = yearlyIncome * totalBonusPercent;
    console.log(totalBonus);
    var totalCompensation = (totalBonus * 1) + (yearlyIncome * 1);
    console.log(totalCompensation);
    var employee = [currentEmployee[0], totalBonusPercent, totalCompensation, totalBonus];
    console.log(employee);
    newArray.push(employee);
  }// end for loop
}// end bonusCalc
bonusCalc(employees);
console.log(newArray);

function baseBonus(currentEmployee) {
  rating = currentEmployee[3];
  var bonus = 0;
  if(rating <= 2) {
    bonus = 0;
  }
  else if (rating == 3) {
    bonus = 0.04;
  }
  else if (rating == 4) {
    bonus = 0.06;
  }
  else {
    bonus = 0.10;
  }
  return(bonus);
}// end baseBonus

//function to calculate each employee's bonus they are to receive (as a percentage)
function timeBonus(currentEmployee) {
  var number = currentEmployee[1];
  var bonus = 0;
  if (number.length <= 4) {
    yearBonus = 0.05;
  }
  else {
    yearBonus = 0;
  }
  return(yearBonus);
}// end timeBonus

// function to calculate each employee's adjusted annual compensation (base annual income + bonus)
function annualBonus(currentEmployee){
  var income = currentEmployee[2];
  var incomeBonus = 0;
  if(income > 65000) {
    incomeBonus = -0.01;
  }
  else{
    incomeBonus = 0;
  }
  return(incomeBonus);
}// end annualBonus

// ----------------------------- second solution ------------------------------------//

// function bonusCalc(employees){
//   var newArray = [];
//
//   for (var i = 0; i < employees.length; i++) {
//     var currentArray = [];
//     var currentEmployee = employees[i];
//     currentArray.push(currentEmployee[0]);
//     currentArray.push(bonusPercent(currentEmployee));
//     currentArray.push(Math.floor((bonusPercent(currentEmployee) + 1) * currentEmployee[2]));
//     currentArray.push((Math.floor(bonusPercent(currentEmployee) * currentEmployee[2])));
//     newArray.push(currentArray);
//   }// end for loop
//   console.log(newArray);
// }// end bonusCalc
// bonusCalc(employees);
//
// // function to calculate employee bonus, as a percent
// function bonusPercent(currentEmployee){
//   var employeeNumber = currentEmployee[1];
//   var income = currentEmployee[2];
//   var rating = currentEmployee[3];
//   var bonus = 0;
//   if ( rating == 3) {
//     bonus = 0.04;
//   }
//   else if (rating == 4) {
//     bonus = 0.06;
//   }
//   else if (rating == 5) {
//     bonus = 0.10;
//   }
//   console.log(bonus);
//   if (employeeNumber.length < 5) {
//     bonus = bonus + 0.05;
//   }
//   if (income > 65000) {
//     bonus = bonus - 0.01;
//   }
//   if (bonus > 0.13) {
//     bonus = 0.13;
//   }
//   if (bonus < 0) {
//     bonus = 0;
//   }
//   return bonus;
// }// end bonusPercent
