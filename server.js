var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/new-message', function(req, res){
	const {message} = req.body

	var str = message.text;
	// if(!message || message.text.toLowerCase().indexOf('marco')<0){
	// 	return res.end()
	// }

	axios.post('https://api.telegram.org/bot323290440:AAFTB3Beccg7UzUW9wrB4Vx_LfIQqChHmK8/sendMessage',{
		chat_id: message.chat.id,
		text: str
	})

	.then(response => {
		console.log('Message Posted')
		res.end('ok')
	})
	.catch(err => {
		console.log('Error: '+err)
		res.end('Error: '+err)
	})
});

app.listen(3000, function(){
	console.log('Telegram App listening on port 3000');
});