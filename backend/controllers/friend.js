const Friend = require('../model/friend');

exports.getFriendFromUser = (req, res) => {
   try{
     Friend.
     find({ userId: req.userData.userId})
       .populate('userId')
       .exec(function(error, posts) {
         if(!error) {
           return res.status(200).json(posts);
         }else {
           return res.status(400).json({message: error.message});
         }
       })
   }catch(error) {
     return res.status(500).json({message: 'Sorry, there went something wrong! ' + error.message});
   }
};
exports.saveFriend = (req, res) => {
  const friend = new Friend({
    userId: req.userData.userId
  })
  friend.save(function (error, friend) {
      if(error){
        return res.status(500).json({
          message: 'Sorry, there went something wrong! ' + err.message,
        });
      }else if (!friend) {
          return res.status(401).json({
            message: 'Authentication failed',
          });
      } else {
        return res.status(200).json(friend);
      }
  })
};
