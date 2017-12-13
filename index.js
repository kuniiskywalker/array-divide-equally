const getRange = (ary, division) => {
    var len = ary.length;

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

module.exports = (ary, division) => {

    var range = getRange(ary, division);

    var result = [];
    var idx = 0;
    for(var i in range) {
        result[i] = ary.slice(idx, idx + range[i]);
        idx = idx + range[i];
    }
    return result;
}
