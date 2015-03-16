var User = require('../model/user')
var Session = require('../model/session')
var Promise = require("bluebird");

module.exports = (function() {
  var self;

  function UserLogin(args) {
    self = this;
    self.args = args || (args = {});
    self.User = args.user || User;
    self.Session = args.session || Session;
  }

  UserLogin.prototype.execute = function(email, password) {
    return new Promise(function (resolve, reject) {

      var user = new self.User(self.args);

      user.email = email;
      user.password = password;

      user.canLogin()
      .then(function(canLogin){

        if (canLogin != true) {
          return resolve(null)
        }

        var session = new self.Session(self.args);

        session.createFor(user)
        .then(function(session) {
          return resolve(session);
        })

      });
    });

  }

  return UserLogin;

})();
