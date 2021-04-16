let Express = require('express');

let app = Express();

app.use(express.json());

app.get('/test', function (req, res) { 
   console.log(req, body);
    res.send('what up');
})

//home endpoint
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/static.html');//will send back file in current directory (__dirname) (dirname gives path to directory) followed by path to file we want to send
})
//app.use('/test', function (req, res) { 
  //console.log(req, body); 
   // res.send('what up');
//})

app.post('/test', function (req, res) { 
   console.log(req, body) 
    res.send('what up');
})

app.listen(
    8080,
    function () {
        console.log('whats gooooodd!');
 }
);

