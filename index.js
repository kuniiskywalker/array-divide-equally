module.exports = (ary, division) => {

    var len = ary.length;

    var max = len < division ? len: division;

    var surplus = len % division;

    var num = (len - surplus) / division;

    var idx = 0;

    var range = [];
    for(var i = 0; i < max; i++) {
        range[i] = num;
        idx = idx + num;
    }

    var counter = 0;
    for(var i = 0; i < surplus; i++) {
        range[counter]++;
        idx = idx + i;
        counter++;
    }

    var result = [];
    var idx = 0;
    for(var i in range) {
        result[i] = ary.slice(idx, idx + range[i]);
        idx = idx + range[i];
    }
    return result;
}
