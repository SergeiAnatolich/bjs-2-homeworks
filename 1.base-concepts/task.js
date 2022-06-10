"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b,2)-4*a*c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b/(2*a)];
  } else if (d > 0) {
    arr = [
      (-b + Math.sqrt(d) )/(2*a),
      (-b - Math.sqrt(d) )/(2*a)
    ]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (percent >= 0 && percent <= 100) {
    if (amount > 0) {
      if (contribution >= 0 && contribution <= amount) {
        let quantityMonths = monthDiff(date, new Date);
        let bodyCredit = amount - contribution;
        let interestRate = 1/12*percent/100;
        let paymentInMonth = bodyCredit*(interestRate+(interestRate/((Math.pow(1+interestRate, quantityMonths))-1)));
        let totalAmount = Number((paymentInMonth * quantityMonths).toFixed(2));
        console.log("totalAmount = " + totalAmount);
        return totalAmount;
      } else {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
      }
    } else {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
    } 
   } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
}

function monthDiff(d2, d1) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
