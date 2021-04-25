import * as Functions from "./Functions";

//1
test('Returns same text', () => {
  expect(Functions.texto('Hello')).toBe('Hello');
});
//2
test('Adding 3 plus 2 equals 5', () => {
  expect(Functions.suma(3,2)).toBe(5);
});
//3
test('Subtracting 5 minus 3 equals 2', () => {
  expect(Functions.resta(5,3)).toBe(2);
})

//4
test('Multiplying 10 by 10 gives 100', () => {
  expect(Functions.multiplicacion(10,10)).toBe(100);
})
//5
test('Division by zero is not possible', () => {
  expect(Functions.division(100,0)).toBe('No se puede dividir por 0');
})
test('100 divided by 10 is 10', () => {
  expect(Functions.division(100,10)).toBe(10);
});
//6
test("Multiplying 2 by all numbers of an array starting from 0 up to 6, as the second argument indicates", () => {
  expect(Functions.tablaMultiplicar(2, 6)).toStrictEqual([0, 2, 4, 6, 8, 10, 12]);
});
test("Multiplying 5 for undefined (Uses an array starting from 0 up to 10 as default for the second argument when is undefined", () => {
  expect(Functions.tablaMultiplicar(5, )).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
//7
test("Returns the value of 7 raised to the power of 2", () => {
  expect(Functions.potencia(7,2)).toEqual(49);
});
//8
test("Returns the sum of the square of 10 plus the square of 3",() => {
  expect(Functions.anidada(10,3)).toBe(109);
});
//9
test("Add leading zeros to 89 until the length of digits reaches 5", () => {
  expect(Functions.cerosIzq(89,5)).toBe("00089");
});