var request = require('request');
var q = require('q');

// Mixin Constructor
function Rates () {

  // Define API Path
  this.apiPath = 'http://api.marcos.do';

};

// Get rates from all banks
Rates.prototype.getAllRates = function () {
  var deferred = q.defer();
  var _this = this;

  request.get(_this.apiPath+'/rates',
  function (err, res){
    if (err) {
      deferred.reject(err);
    };

    if (!res) {
      deferred.reject({
        msg: 'An unexpected error occured while fetching the rates'
      });
    } else {
      deferred.resolve({
        rates: res.body,
        status: res.statusCode
      });
    };
  });

  return deferred.promise;
};

//Get rates from the Central Bank
Rates.prototype.centralBankRate = function () {
  var deferred = q.defer();
  var _this = this;

  request.get(_this.apiPath+'/central_bank_rates',
  function (err, res){
    if (err) {
      deferred.reject(err);
    };

    if (!res) {
      deferred.reject({
        msg: 'An unexpected error occured while fetching the rates'
      });
    } else {
      deferred.resolve({
        rates: res.body,
        status: res.statusCode
      });
    };
  });

  return deferred.promise;

};

module.exports = Rates;
