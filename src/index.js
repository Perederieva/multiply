module.exports = function multiply(first, second) {

    var num1 = first.split('');
    var num2 = second.split('');

    var result = [];

    var length1 = num1.length - 1;
    var length2 = num2.length - 1;
    for (var i = length1; i >= 0; i--) {
        for (var j = length2; j >= 0; j--) {
            if(!(result[i + j])){
                result[i + j] = num1[i] * num2[j];
            }
            else {
                result[i + j] += num1[i] * num2[j];
            }
        }
    }

    result.reverse();

    var length3 = result.length - 1;
    for (var k = 0; k < length3; k++) {
        var buffer = Math.floor(result[k] / 10);
        result[k] = result[k] % 10;

        if(!(result[k + 1]) && buffer > 0){
            result[k + 1] = buffer;
        }
        else {
            result[k + 1] += buffer;
        }
    }

    return result.reverse().join('');

};
