const errorHandler = (error, request, response, next) => {
  console.log('Error handler', error);
  const status = error.status || 400;
  // send back an easily understandable error message to the caller
  response.status(status).send({
    status: status,
    message: error.message,
    extra: error?.extra,
  });
};

module.exports = { errorHandler };
