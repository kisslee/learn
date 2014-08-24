var factorial = exports.factorial = function(n){
    var res = 0;
    if(n == 0){
      res = 1;
    }else{
      res = n * factorial(n - 1);
    }
    return res;
};

var fibonacci = exports.fibonacci = function(n){
    var res = 0;
    if(n === 1){
        res = 1;
    }else if(n === 2){
        res = 1;
    }else{
        res = fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.info(res);
    return res;
};