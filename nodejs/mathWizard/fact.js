var htutil = require('./htutil');
var math = require('./math');

exports.get = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end(htutil.page('Factorial',htutil.navbar(),[
        (!isNaN(req.a)
         ? ("<p class='result'>{a} factorial = {fact}</p>"
            .replace("{a}",req.a)
            .replace("{fact}",math.factorial(Math.floor(req.a))))
         : ""),
        "<p>Enter Numbers for Mutiply</p>",
        "<form name='fact' action='/fact' method='get'>",
            "A:<input type='text' name='a'/><br>",
            "<input type='submit' value='ok'/></form>"].join("\n")
    ));
};