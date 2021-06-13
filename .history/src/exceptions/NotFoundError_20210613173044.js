const Client = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
  }
}
