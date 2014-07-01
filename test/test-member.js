var qs = require('qs');
var query = {
 where: {
   price: {gt: 2}
 }
};

require('superagent')
 .get('http://localhost:3000/api/members?' + qs.stringify(query))
 .set('Content-Type', 'application/json')
 .end(function(err, res) {
   console.log(res.body);
 });