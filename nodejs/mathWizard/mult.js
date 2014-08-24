var htutil = require('./htutil');

exports.get = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    var result = req.a * req.b;
    res.end(htutil.page('Multiplication',htutil.navbar(),[
        (!isNaN(req.a) && !isNaN(req.b)
         ? ("<p class='result'>{a} * {b} = {result}</p>"
            .replace("{a}",req.a)
            .replace("{b}",req.b)
            .replace("{result}",req.a * req.b))
         : ""),
        "<p>Enter Numbers for Mutiply</p>",
        "<form name='mult' action='/mult' method='get'>",
            "A:<input type='text' name='a'/><br>",
            "B:<input type='text' name='b'/><br>",
            "<input type='submit' value='ok'/></form>"].join("\n")
    ));
};