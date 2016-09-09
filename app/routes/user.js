var user = require('../controllers/user.js');

module.exports = function(app) {
    app.route('/user').get(user.getUser);
}