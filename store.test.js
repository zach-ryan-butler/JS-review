const { getState, updateState } = require('./store');

describe('create functions', () => {
    it('getState function', () => {
        expect(getState()).toEqual({
            shirts: 5,
            pants: 10,
            toys: 100,
            shoes: 1,
            apples: 9
        });
    });
    it('updateState function', () => {
        updateState('shirts', 15);
        expect(getState()).toEqual({
            shirts: 15,
            pants: 10,
            toys: 100,
            shoes: 1,
            apples: 9
        });
    });
});
