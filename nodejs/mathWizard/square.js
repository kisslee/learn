var htutil = require('./htutil');

exports.get = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    var result = req.a * req.b;
    res.end(htutil.page('Square',htutil.navbar(),[
        (!isNaN(req.a)
         ? ("<p class='result'>{a} squared = {sq}</p>"
            .replace("{a}",req.a)
            .replace("{sq}",req.a * req.a))
         : ""),
        "<p>Enter Numbers for Square</p>",
        "<form name='square' action='/square' method='get'>",
            "A:<input type='text' name='a'/><br>",
            "<input type='submit' value='ok'/></form>"].join("\n")
    ));
};