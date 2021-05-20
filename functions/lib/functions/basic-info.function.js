"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicInfoFunctions = void 0;
const basic_info_service_1 = require("../services/basic-info.service");
const get = async () => {
    try {
        const response = await basic_info_service_1.basicInfoService.get();
        if (response) {
            return {
                status: 200,
                body: response,
            };
        }
        else {
            return {
                status: 404,
                body: {
                    error: 'basic info not found',
                    message: 'Unable to find basic info',
                },
            };
        }
    }
    catch (error) {
        return {
            status: 500,
            body: {
                error: 'Internal server error',
                message: 'Unable to fetch basic info',
                detail: error,
            },
        };
    }
};
exports.basicInfoFunctions = {
    get,
};
//# sourceMappingURL=basic-info.function.js.map