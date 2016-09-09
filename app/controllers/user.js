var User = require('mongoose').model('User');

exports.getUser = function(req, res, next) {
    User.find({}, function(err, user){
        if(err)
            return res.json(err)
            
        if(!user.lenght)
            return res.json({'message':'data not found'});

        return res.json({'status':200, 'result':user});    
    });
}