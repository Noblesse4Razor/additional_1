module.exports = function sum(a) {
    var currentSum = 0;
    for(var i=0; i<arguments.length; i++) currentSum += arguments[i];
    function f(b) {
        for(var i=0; i<arguments.length; i++) currentSum += arguments[i];
        if(typeof b == "undefined") return f.toString();

        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}
