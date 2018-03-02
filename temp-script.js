var rp = require('request-promise');
var request = require('request');

var method = 'GET'
var headers = {'User-Agent': 'curl'};
var auth = {
              username: '46058fc292d4df0a7bc79919e0e1f6083ba644f21d1345090c37bbc20ec44527',
              password: 'fc55679cfbab130232a2680afc587fb5eb1be270d86f74ccc82eeedb6acd903e'
           }

var request1_options = {
    url: 'https://api.planningcenteronline.com/services/v2/service_types/299966/plans?filter=future&order=created_at',
    headers: headers,
    method: method,
    auth: auth,
    json: true // Automatically parses the JSON string in the response
};

rp(request1_options)
  .then(function (plan) {
    console.log('Number of plans: ' + plan.data.length)

    for (var a = 0; a < plan.data.length; a++) {
      console.log('plan: ' + plan.data[a].id)
      var obj = plan.data[a]
      request({
        method: method,
        url: 'https://api.planningcenteronline.com/services/v2/service_types/299966/plans/'+obj.id+'/items?include=song,arrangement,key',
        headers: headers,
        auth: auth
      }, function (err,res,body){
        // console.log(body);
        var data = JSON.parse(body);
        // console.log(obj.id + ': ' + JSON.stringify(data2.data)+'\n')
        console.log(obj.id + ': ' + JSON.stringify(data.data.length)+'\n')
        // console.log(data.data[0]);
      })
    }
  })
  .catch(function (err) {
      // API call failed...
  });
