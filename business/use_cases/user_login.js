var User = require('../model/user')
var Promise = require("bluebird");

module.exports = (function() {
  var self;

  function UserLogin(args) {
    self = this;
    self.args = args || (args = {});
    self.User = args.user || User;
  }

  UserLogin.prototype.execute = function(email, password) {
    return new Promise(function (resolve, reject) {

      var user = new self.User(self.args);

      user.email = email;
      user.password = password;

      user.canLogin()
      .then(function(canLogin){
        if (canLogin)
          resolve({id: "1"});
      });

    });

  }

  return UserLogin;

})();
