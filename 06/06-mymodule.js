/* The module must export a single function that takes three arguments: the
  directory name, the filename extension string and your callback function,
  in that order.
  The callback function must be called using the idiomatic node(err, data)
  convention.
  These four things are the contract that your module must follow.
   1. Export a single function that takes exactly the arguments described.
   2. Call the callback exactly once with an error or some data as described.
   3. Don't change anything else, like global variables or stdout.
   4. Handle all the errors that may occur and pass them to the callback.
  */

const fs = require("fs");
const path = require("path");


module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => {
        if(err)
            return callback(err);
        
        files = files.filter((file) => path.extname(file) === '.' + ext);

        callback(null,files);

    });
}

