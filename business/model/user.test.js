"use strict"

var expect = require('expect.js');
var User = require('./user');
var Promise = require("bluebird");

describe('User:', function() {

  describe('canLogin:', function() {

    it('should return true for a registered user with valid email and password', function(done) {

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
      var user = new User({userRepo: userRepo});
      user.email = email;
      user.password = password;
      user.canLogin()
      .then(function(canLogin){

        //Then
        expect(canLogin).to.be(true);
        done();

      })

    });

    it('should return false for a unregistered user with valid email and password', function(done) {

      //Given
      var email = "valid@email.com";
      var password = "validPass";

      var userRepo = (function() {
        function Repo () {}
        Repo.prototype.canLogin = function(email, password) {
          return new Promise(function (resolve, reject) {
            resolve(false)
          });
        }
        return Repo;
      })();

      //When
      var user = new User({userRepo: userRepo});
      user.email = email;
      user.password = password;
      user.canLogin()
      .then(function(canLogin){

        //Then
        expect(canLogin).to.be(false);
        done();

      })

    });

  });

});
