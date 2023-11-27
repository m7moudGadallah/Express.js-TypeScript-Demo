/**
 * HTTP status codes and their corresponding numeric values for use in web applications.
 */
const enum HttpStatusCodes {
  // Level 200 (Success)
  OK = 200,
  Created = 201,
  NoContent = 204,

  // Level 400
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,

  // Level 500
  InternalServerError = 500,
  NotImplemented = 501,
  ServiceUnavailable = 503,
  NetworkTimeout = 599,
}

export { HttpStatusCodes };
