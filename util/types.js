'use strict';

module.exports = function(util) {
  return {
    mssql: require('./mssql')(util)
  };
};
