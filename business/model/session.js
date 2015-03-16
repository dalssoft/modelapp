var Promise = require("bluebird");

module.exports = (function() {
  var self;

  function Session(args) {
    self = this;
    self.args = args || (args = {});
    self.SessionRepo = args.sessionRepo;
    self.ID_SIZE = args.sessionIdSize || 32;
  }

  Session.prototype.newId = function()
  {
      var text = "";
      var possible = "ABCDEFGHIJKMNPQRSTUVWXYZ23456789";

      for( var i=0; i < self.ID_SIZE; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

  Session.prototype.createFor = function(user) {
    return new Promise(function (resolve, reject) {

      var sessionId = self.newId();

      var repo = new self.SessionRepo();
      repo.create(user.id, sessionId)
      .then(function(sessionId) {
        var session = new Session(self.args);
        session.userId = user.id;
        session.id = sessionId;
        resolve(session);
      });

    });
  }

  return Session;

})();
