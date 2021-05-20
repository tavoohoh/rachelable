"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicInfoRoute = void 0;
const functions = require("firebase-functions");
const cors_1 = require("../commons/cors");
const method_enum_1 = require("../enums/method.enum");
const basic_info_function_1 = require("../functions/basic-info.function");
exports.basicInfoRoute = functions.https.onRequest(async (request, response) => {
    return cors_1.cors(request, response, async () => {
        functions.logger.info('basic info route', { structuredData: true });
        let responseValue;
        switch (request.method) {
            case method_enum_1.methodEnum.GET:
                responseValue = await basic_info_function_1.basicInfoFunctions.get();
                break;
            default:
                responseValue = {
                    status: 405,
                    body: {
                        error: 'Method not allowed',
                    },
                };
                functions.logger.error('Method not allowed.', { structuredData: true });
                break;
        }
        response.status(responseValue.status).send(responseValue.body);
    });
});
//# sourceMappingURL=basic-info.route.js.map