/* 2) Use a third-party package to abstract the difficulties involved in
  collecting an entire stream of data. Two different packages provide a
  useful API for solving this problem (there are likely more!): bl (Buffer
  List) and concat-stream; take your pick!
  
  Both bl and concat-stream can have a stream piped in to them and they will
  collect the data for you. Once the stream has ended, a callback will be
  fired with the data:

     response.pipe(bl(function (err, data) { /* ... * / }))
     // or
     response.pipe(concatStream(function (data) { /* ... * / }))

  Note that you will probably need to data.toString() to convert from a
  Buffer. */

// $ npm install bl

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (response) =>{
    response.pipe(bl( (err,data) => {
    if(err)
      console.error('Error: '+err);

    data = data.toString();
    console.log(data.length);
    console.log(data);
  } ));
});