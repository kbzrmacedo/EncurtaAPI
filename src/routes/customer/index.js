var fs = require('fs');
var endpoint = '/frase';
module.exports = [
  {
    method: 'get',
    endpoint: endpoint,
    query: fs.readFileSync(__dirname + '/index.sql', 'utf8')
  }
];