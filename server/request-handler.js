// var fs = require('fs');
var url = require('url');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var messages = [ {
  text: 'Hello World',
  username: 'Fred',
  roomname: 'lobby'
}];

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data))
}

var requestHandler = function (request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  // var urlObj = url.parse(request.url);

  if (request.method === 'GET') {
    // if (request.url === '/classes/messages/') {
    sendResponse(response, {results: messages});
    // } else {
    //   response.writeHead(404);
    //   response.end();
    // }
    //code the server reads 
  } else if (request.method === 'POST') {
    var string = '';
    request.on('data', (chunk) => {
      string += chunk;
    })
    request.on('end', () => {
      messages.push(JSON.parse(string))
    })
    // response.writeHead(201, headers);//write head changes the method of the object 
    // response.end(); //end transmission
    sendResponse(response, {objectId: 1});
  } else if (request.method === 'OPTIONS') {
    sendResponse(response, null);
  }

  // response.end(JSON.stringify({results: messages}));
  // we are sending back 
};

module.exports.requestHandler = requestHandler;



  // if (request.url === '/') {
  //   if (request.method === 'GET') {
  //     fs.readFile('/Users/taylorbantle/Documents/HRLA27/Junior/hrla27-chatterbox-server/client/index.html', function (err, data) {
  //       console.log('error', err);
  //       console.log('this is data', data);
  //       if (err) {
  //         throw err;
  //       }
  //       response.writeHead(200, { 'Content-Type': 'application/json' });
  //       var emptyString = '';

  //       response.on('data', (data) => {
  //         emptyString += data.toString();
  //       })
  //       console.log('emptystring', emptyString)
  //       response.on('end', function () {
  //         object.results.push(JSON.parse(emptyString))
  //       })
  //       console.log('string', object.results);
  //       // response.write(data);
  //       response.end(object.results);
  //     });
  //   }
  // }