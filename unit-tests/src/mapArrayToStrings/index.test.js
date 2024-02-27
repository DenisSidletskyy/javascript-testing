const mapArrayToStrings = require('./index')

describe('Map array to strings', () => {
    test('Numbers', () => {
        expect(mapArrayToStrings([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5']);
    });

    test('Mix', () => {
        expect(mapArrayToStrings([1, 2, 3, 4, 5, 'a', 'b', 'c'])).toEqual(['1', '2', '3', '4', '5']);
    });

    test('Mix', () => {
        expect(mapArrayToStrings([1, 2, 3, 4, 5, 'a', 'b', 'c'])).not.toEqual(['1', '2', '3', '4', '5', 'a', 'b', 'c']);
    });

    test('Empty', () => {
        expect(mapArrayToStrings(['a', 'b', 'c'])).toEqual([]);
    });
});