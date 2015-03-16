"use strict"

var expect = require('expect.js');
var Session = require('./session');
var Promise = require("bluebird");

describe('Session:', function() {

  describe('createFor:', function() {

    it('should return a new session for valid user', function(done) {

      //Given
      var user = {
        id: 102030,
        email: "valid@email.com",
        password: "validPass"
      }

      var sessionRepo = (function() {
        function Repo () {}
        Repo.prototype.create = function(userId, sessionId) {
          return new Promise(function (resolve, reject) {
            resolve(sessionId)
          });
        }
        return Repo;
      })();

      //When
      var session = new Session({sessionRepo: sessionRepo});
      session.createFor(user)
      .then(function(session){

        //Then
        expect(session).not.to.be.empty();
        expect(session.id).to.be.a('string');
        expect(session.id).to.have.length(session.ID_SIZE);
        expect(session.userId).to.be.a('number');
        done();

      })

    });

  });

});
