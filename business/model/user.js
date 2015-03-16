var Promise = require("bluebird");

module.exports = (function() {
  var self;

  function User(args) {
    self = this;
    self.args = args || (args = {});
    self.UserRepo = args.userRepo;
  }

  User.prototype.canLogin = function() {
    return new Promise(function (resolve, reject) {

      var repo = new self.UserRepo();

      repo.canLogin(self.email, self.password)
      .then(function(canLogin) { resolve(canLogin); });

    });
  }

  return User;

})();
