module.exports = (err, req, res, next) => {
  err.statusCode ||= 500;
  err.status ||= "error";
  if (err.name === "TokenExpiredError") {
    err.statusCode = 401;
    err.status ||= "fail";
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};
