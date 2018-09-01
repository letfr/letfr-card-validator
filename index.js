
function cardValidator(num) {
  try {
    if (num === "" || num === undefined) {
      throw new Error("Está faltando parâmetro!");
    } else if (typeof num !== "number") {
      throw new Error("Digite apenas números!");
    } else if (Number.isInteger(num) && num.toString().length === 1) {
      throw new Error("O número informado contém apenas um digito!");
    } else {
      let reverseNumber = String(num).split("").reverse();
      let evenPosition = [];
      let oddPosition = [];
      for (let i in reverseNumber) {
        if (i % 2 !== 0) {
          reverseNumber[i] * 2 > 9 ? evenPosition.push((reverseNumber[i] * 2) - 9) : evenPosition.push(reverseNumber[i] * 2);
        } else {
          oddPosition.push(parseInt(reverseNumber[i]));
        }
      }
      let concat = evenPosition.concat(oddPosition);
      let sum = concat.reduce((prev, elem) => prev + elem);
      return (sum % 10 === 0) ? true : false;
    }
  } catch (e) {
    return e.message;
  }
}
module.exports.cardValidator = cardValidator;
// module.exports = cardValidator;