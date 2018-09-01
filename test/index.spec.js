var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");
var expect = chai.expect;

describe("index", function () {
  describe("#cardValidator", function () {
    describe("Quando nao houver parâmetro", function () {
      it("deve lancar um erro", function () {
        expect(index.cardValidator()).to.equal("Está faltando parâmetro!");
        expect(index.cardValidator("")).to.equal("Está faltando parâmetro!");
      });
    });  
    describe("Quando o número for uma string", function () {
      it("deve lançar um erro", function () {
        expect(index.cardValidator("abc")).to.equal("Digite apenas números!");
      });
    });  
    describe("Quando o número for um inteiro e houver um digito", function () {
      it("deve lançar um erro", function () {
        expect(index.cardValidator(3)).to.equal("O número informado contém apenas um digito!");
      });
    });  
    describe("Quando o número for um inteiro e for um cartão válido", function () {
      it("deve retornar true", function () {
        expect(index.cardValidator(36490102462661)).to.equal(true);
      });
    }); 
    describe("Se o cartão for inválido", function () {
      it("deve retornar false", function () {
        expect(index.cardValidator(12345)).to.equal(false);
      });
    }); 
  });
});