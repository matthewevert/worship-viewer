var request = require('request');
var method = 'GET'
var headers = {'User-Agent': 'curl'};
var auth = {
              username: '46058fc292d4df0a7bc79919e0e1f6083ba644f21d1345090c37bbc20ec44527',
              password: 'fc55679cfbab130232a2680afc587fb5eb1be270d86f74ccc82eeedb6acd903e'
           }

request({
  method: method,
  url: 'https://api.planningcenteronline.com/services/v2/service_types/299966/plans?filter=future&order=created_at',
  headers: headers,
  auth: auth
}, function (err,res,body){
  // console.log(body);
  var plan = JSON.parse(body);
  console.log('Number of people in system: ' + plan.data.length)
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
      var data2 = JSON.parse(body);
      // console.log(obj.id + ': ' + JSON.stringify(data2.data)+'\n')
      // console.log(obj.id + ': ' + JSON.stringify(data2.data.length)+'\n')
      // for (var b = 0; b < data2.data.length; b++) {
        console.log('Details for plan: ' +data2.meta.parent.id)
      // }
      // console.log(data.data[0]);
    });
  }
  // console.log(data.data[0]);
  /*  */
});
// get all upcoming plans
// for each plan, display:
  // plan name (date?)
  // worship team members scheduled
  // worship team spots available?
  // songs
    // song name
    // youtube video
    // chords
    // key
    // arranagement
