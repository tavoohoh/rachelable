"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
/**
 * Authenticate with email and password: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
 * Retrieve `access_token`: https://developers.google.com/identity/toolkit/reference/securetoken/rest/v1/token
 */
const unauthorizedError = (response) => {
    const errorMessage = 'Error while verifying authorization';
    functions.logger.error(errorMessage);
    response.status(403).send({
        error: 'Unauthorized',
        message: errorMessage,
    });
};
exports.authorization = async (request, response) => {
    if (request.headers.authorization &&
        request.headers.authorization.startsWith('Bearer ')) {
        try {
            const token = request.headers.authorization.split('Bearer ')[1];
            return {
                user: await admin.auth().verifyIdToken(token),
            };
        }
        catch (error) {
            unauthorizedError(response);
        }
    }
    else {
        unauthorizedError(response);
    }
};
//# sourceMappingURL=auth.js.map