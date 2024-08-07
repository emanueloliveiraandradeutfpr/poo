import ExemploJest from '../model/ExemploJest';

const jest = new ExemploJest();

test('test 1', () => {
    expect(jest.getDouble(5)).toBe(10);
});
