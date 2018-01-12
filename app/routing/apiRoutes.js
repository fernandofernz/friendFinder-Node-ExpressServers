var friendObject = require('../data/friends');

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(friendObject);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendObject array
    var newUserFriend = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i = 0; i < friendObject.length; i++){
      var scores = 0;
      //run through scores to compare friends
      for(var j=0; j<newUserFriend.length; j++){
        scores += (Math.abs(parseInt(friendObject[i].scores[j]) - parseInt(newUserFriend[j])));
      }
      scoresArray.push(scores);
    }

    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    var userMatch = friendObject[bestMatch];
    res.json(userMatch);
    //pushes new submission into the friendObject array
    friendObject.push(req.body);
  });
};

