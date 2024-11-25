const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const errorResponse = {
    message: err.message,
    stackTrace: err.stack,
  };

  // Handle specific error cases based on status code
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      return res.status(statusCode).json({ title: "Validation Failed", ...errorResponse });
    case constants.NOT_FOUND:
      return res.status(statusCode).json({ title: "Not Found", ...errorResponse });
    case constants.UNAUTHORIZED:
      return res.status(statusCode).json({ title: "Unauthorized", ...errorResponse });
    case constants.SERVER_ERROR:
      return res.status(statusCode).json({ title: "Server Error", ...errorResponse });
    default:
      console.log("No error, All Good!");
      return res.status(statusCode).json({ title: "Unknown Error", ...errorResponse });
  }
};

module.exports = errorHandler;