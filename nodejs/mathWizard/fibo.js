var htutil = require('./htutil');
var math = require('./math');

exports.get = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end(htutil.page('Fibonacci',htutil.navbar(),[
        (!isNaN(req.a)
         ? ("<p class='result'>fibonacci {a} = {fibo}</p>"
            .replace("{a}",Math.floor(req.a))
            .replace("{fibo}",math.fibonacci(Math.floor(req.a))))
         : ""),
        "<p>Enter Numbers for Mutiply</p>",
        "<form name='fibo' action='/fibo' method='get'>",
            "A:<input type='text' name='a'/><br>",
            "<input type='submit' value='ok'/></form>"].join("\n")
    ));
};