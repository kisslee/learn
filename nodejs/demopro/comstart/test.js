function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, 'hello liker');

execute(function(word){console.log(word)}, 'my name is likai.');
