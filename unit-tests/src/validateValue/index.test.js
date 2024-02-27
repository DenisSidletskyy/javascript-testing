const validateValue = require('./index');

describe('Value validation', () => {
    test('Valid value', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Valid value', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Valid value', () => {
        expect(validateValue(100)).toBe(true);
    });

    test('Invalid value', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('Invalid value', () => {
        expect(validateValue(101)).toBe(false);
    });
});

