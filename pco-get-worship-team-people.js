var request = require('request');

request({
  method: 'GET',
  url: 'https://api.planningcenteronline.com/services/v2/teams/1074188/people/',
  headers: {'User-Agent': 'curl'},
  auth: {
    username: '46058fc292d4df0a7bc79919e0e1f6083ba644f21d1345090c37bbc20ec44527',
    password: 'fc55679cfbab130232a2680afc587fb5eb1be270d86f74ccc82eeedb6acd903e'
  }
}, function (err,res,body){
  // console.log(body);
  var data = JSON.parse(body);
  console.log('Number of people in system: ' + data.data.length)
  // console.log(data.data[0]);
});
