// https://functions.netlify.com/playground/
exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  });
};
