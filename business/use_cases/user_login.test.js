"use strict"

var expect = require('expect.js');
var UserLogin = require('./user_login');
var User = require('../model/user');
var Promise = require("bluebird");

describe('User Login:', function() {

  describe('When user try to login', function() {

    it('should create a new session for a valid user email and password', function(done) {

      //Given
      var email = "valid@email.com";
      var password = "validPass";
      var userRepo = (function() {
        function Repo () {}
        Repo.prototype.canLogin = function(email, password) {
          return new Promise(function (resolve, reject) {
            resolve(true)
          });
        }
        return Repo;
      })();

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
      var userLogin = new UserLogin({userRepo: userRepo, sessionRepo: sessionRepo});

      userLogin.execute(email, password)
      .then(function(session){

        //Then
        expect(session).not.to.be.empty();
        expect(session.id).not.to.be.empty();
        done();

      })

    });

  });

});
