"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
/**
 * HttpResponse Class
 *
 * A utility class that extends Express Response to provide standardized
 * HTTP response formatting for successful API responses. This helps maintain
 * consistent response structures throughout the application.
 *
 * @extends Response
 */
/**
     * Sends a successful response with standardized format
     *
     * This static method formats and sends a successful API response with a consistent structure,
     * including success status, message, and content payload.
     *
     * @static
     * @param {Response} response - The Express response object
     * @param {number} statusCode - HTTP status code (e.g., 200, 201)
     * @param {string} message - Success message to be included in the response
     * @param {any} content - The data payload to be sent in the response
     * @returns {void}
     * */
class HttpResponse extends Response {
    static sendYES(response, statusCode, message, content) {
        response.status(statusCode).json({
            success: true,
            message: message,
            content: content,
        });
    }
}
exports.HttpResponse = HttpResponse;
