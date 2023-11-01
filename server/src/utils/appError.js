class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // This error is operational (not programming error)
    Error.captureStackTrace(this, this.constructor); // Prevent current function from being in the stack trace
  }
}

module.exports = AppError;
