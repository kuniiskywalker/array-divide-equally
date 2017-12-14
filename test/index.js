var assert = require('power-assert');
var devideEqually = require('../');

describe('devideEqually', () => {
    context('When the array is divisible', () => {
        var data = new Array(1, 2, 3, 4, 5, 6); 
        it('should return deivided into three when devide three', () => {
            assert(devideEqually(data, 3).length === 3);
        });
        it('should return deivided array', () => {
            assert.deepEqual(devideEqually(data, 3), [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]);
        });
    });
    context('When the array is not divisible', () => {
        var data = new Array(1, 2, 3, 4, 5, 6, 7); 
        it('should return deivided into three when devide three', () => {
            assert(devideEqually(data, 3).length === 3);
        });
        it('should return deivided array', () => {
            assert.deepEqual(devideEqually(data, 3), [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]);
        });
    });
    context('When the array is smaller than the division number', () => {
        var data = new Array(1, 2); 
        it('should return deivided into two', () => {
            assert(devideEqually(data, 3).length === 2);
        });
        it('should return deivided array', () => {
            assert.deepEqual(devideEqually(data, 3), [ [ 1 ], [ 2 ] ]);
        });
    });
});
