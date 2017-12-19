'use strict'

/**
 * Expose `arrayDivideEqually`.
 */
module.exports = divideEqually

/**
 * Devide an array.
 *
 * @param  {Array} array
 * @param  {number} division
 * @return {Array}
 */
function divideEqually (array, division) {

    if (!Array.isArray(array)) {
        throw new TypeError('Expected value to be an array')
    }

    var range = getRange(array, division);

    var result = [];
    var idx = 0;
    for(var i in range) {
        result[i] = array.slice(idx, idx + range[i]);
        idx = idx + range[i];
    }
    return result;
}

/**
 * Range of index to divide an array.
 *
 * @param  {Array} array
 * @param  {number} division
 * @return {Array}
 */
const getRange = (array, division) => {

    if (typeof division !== 'number') {
        throw new TypeError('Expected the division to be a number')
    }

    var len = array.length;

    var max = len < division ? len: division;

    var surplus = len % division;

    var num = (len - surplus) / division;

    var idx = 0;

    var range = [];
    for(var i = 0; i < max; i++) {
        range[i] = num;
        idx = idx + num;
        if (surplus > 0) {
            range[i]++;
            idx++; 
            surplus--;
	}
    }
    return range;
}
