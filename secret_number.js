'use strict';
module.exports = function() {
  let secret = Math.floor(Math.random() * 1000000 + 1);
  return function secretNumber (){
    return secret;
  };
};