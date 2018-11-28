
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login',function (req,res,nect) 
{

  var username = req.body.username;
  var password = req.body.password;

  var database = req.app.get("database");
  var users = database.collection('users');

 // var serverName =  users.find({"username" : username},{"username" : 1});
 // var serverpass =  users.find({"password" : password},{"password" : 1});

  if(username != undefined && password != undefined)
  {
    users.find({"username" : username} , function(err , result)
    {
        res.status(200).send("scces");
    });


  }
});


//사용자 등록
router.post('/add',function(req ,res ,next)
{
  var username = req.body.username;
  var password = req.body.password;
  var nickname = req.body.nickname;
  //var score = req.body.score;

  var database = req.app.get("database");
  var users = database.collection('users');
  
  if(username != undefined && password != undefined &&
     nickname != undefined )
  {
    
    users.insert
    ([{
      "username" : username , 
      "password" : password , 
      "nickname" : nickname
      //"score" : score
    }],function(err , result)
      {
          res.status(200).send("success");
      });
  }

});



module.exports = router;