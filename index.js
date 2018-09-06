function cardValidator(num) {
  if (num === "" || num === undefined) {
    throw new Error("Está faltando parâmetro!");
  } else if (typeof num !== "number") {
    throw new Error("Digite apenas números!");
  } else if (Number.isInteger(num) && num.toString().length === 1) {
    throw new Error("O número informado contém apenas um digito!");
  } else {
    const reverse = String(num).split("").reverse();
    let even = [];
    let odd = [];
    reverse.forEach((el, i) => {
      if (i % 2 !== 0) {
        el * 2 > 9 ? even.push((el * 2) - 9) : even.push(el * 2);
      } else {
        odd.push(parseInt(el));
      }
    });
    const concat = even.concat(odd);
    const sum = concat.reduce((prev, elem) => prev + elem);
    return sum % 10 === 0;
  }
}
module.exports.cardValidator = cardValidator;