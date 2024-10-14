const Calculator = require('./calculator');

// calculator.test.js

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.add(-1, 1)).toBe(0);
        expect(calc.add(0, 0)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(calc.subtract(5, 2)).toBe(3);
        expect(calc.subtract(2, 5)).toBe(-3);
        expect(calc.subtract(0, 0)).toBe(0);
    });

    test('should multiply two numbers correctly', () => {
        expect(calc.multiply(4, 3)).toBe(12);
        expect(calc.multiply(-1, 1)).toBe(-1);
        expect(calc.multiply(0, 5)).toBe(0);
    });

    test('should divide two numbers correctly', () => {
        expect(calc.divide(10, 2)).toBe(5);
        expect(calc.divide(-10, 2)).toBe(-5);
        expect(calc.divide(0, 1)).toBe(0);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow('Division by zero is not allowed.');
    });
});