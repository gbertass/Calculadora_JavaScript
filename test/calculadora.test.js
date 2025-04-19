var assert = require('assert');
const Calculadora = require('../src/calculadora');


describe('Testes da Calculadora: função de Soma', function (){
  let minhaCalculadora;
  
  beforeEach(function (){
    minhaCalculadora= new Calculadora();
  });

  it('Teste soma com positivos', function () {
    assert.equal(minhaCalculadora.somar(3,2),5);
  });

  it('Teste soma com zero', function (){
    assert.equal(minhaCalculadora.somar(12,0),12);
  });

  it('Teste soma com número negativo', function (){
    assert.equal(minhaCalculadora.somar(-2,2),0);
  });

});

describe('Testes da Calculadora: função de Subtração', function (){
  let minhaCalculadora;
  
  beforeEach(function (){
    minhaCalculadora= new Calculadora();
  });

  it('Teste subtração com positivos', function () {
    assert.equal(minhaCalculadora.subtrair(3,2),1);
  });

  it('Teste subtração com zero', function (){
    assert.equal(minhaCalculadora.subtrair(0,1), -1);
  });

  it('Teste subtração com número negativo', function (){
    assert.equal(minhaCalculadora.subtrair(-2,2), -4);
  });

});

describe('Testes da Calculadora: função de Multiplicação', function (){
  let minhaCalculadora;
  
  beforeEach(function (){
    minhaCalculadora= new Calculadora();
  });

  it('Teste multiplicação com positivos', function () {
    assert.equal(minhaCalculadora.multiplicar(3,4),12);
  });

  it('Teste multiplicação com zero', function (){
    assert.equal(minhaCalculadora.multiplicar(0,7), 0);
  });

  it('Teste multiplicação com número negativo', function (){
    assert.equal(minhaCalculadora.multiplicar(-2,1), -2);
  });

});

describe('Testes da Calculadora: função de Divisão', function (){
  let minhaCalculadora;
  
  beforeEach(function (){
    minhaCalculadora= new Calculadora();
  });

  it('Teste divisão com positivos', function () {
    assert.equal(minhaCalculadora.dividir(10,5),2);
  });

  it('Teste divisão com zero', function (){
    assert.equal(minhaCalculadora.dividir(6,0), 0);
  });

  it('Teste divisão com número negativo', function (){
    assert.equal(minhaCalculadora.dividir(-10,2), -5);
  });

});