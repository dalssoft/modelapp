"use strict"

var expect = require('expect.js');
var UserLogin = require('./user_login');
var User = require('../model/user');
var Promise = require("bluebird");

describe('User Login:', function() {

  describe('When user try to login', function() {

    it('should create a session for a valid email and password', function(done) {

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

      //When
      var userLogin = new UserLogin({userRepo: userRepo});

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
