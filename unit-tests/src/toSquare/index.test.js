const toSquare = require('./index');

describe('To square', () => {
    beforeAll(() => {
        console.log('Before all tests');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Valid value', () => {
        expect(toSquare(5)).toBe(25);
        expect(toSquare(10)).toBeLessThan(101);
        expect(toSquare(10)).toBeGreaterThan(99);
        expect(toSquare(10)).not.toBeUndefined();
    });

    test('With Math.pow', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        toSquare(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('Without Math.pow', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        toSquare(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
})