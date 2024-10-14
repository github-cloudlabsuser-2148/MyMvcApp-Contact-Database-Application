class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;c
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(2, 3));        // Output: 5
console.log(calc.subtract(5, 2));   // Output: 3
console.log(calc.multiply(4, 3));   // Output: 12
console.log(calc.divide(10, 2));    // Output: 5