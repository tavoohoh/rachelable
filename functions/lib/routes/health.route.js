"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const functions = require("firebase-functions");
const cors_1 = require("../commons/cors");
const auth_1 = require("../commons/auth");
exports.health = functions.https.onRequest(async (request, response) => {
    return cors_1.cors(request, response, async () => {
        if (request.query.auth) {
            const { user } = await auth_1.authorization(request, response);
            response.status(200).send({
                health: 'Just fine',
                user: user,
            });
        }
        else {
            response.status(200).send({
                health: 'Just fine',
            });
        }
    });
});
//# sourceMappingURL=health.route.js.map