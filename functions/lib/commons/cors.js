"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const method_enum_1 = require("../enums/method.enum");
exports.cors = require('cors')({
    origin: true,
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Content-Type',
        'Origin',
        'X-Requested-With',
        'Accept',
        'Authorization',
    ],
    methods: [
        method_enum_1.methodEnum.OPTIONS,
        method_enum_1.methodEnum.GET,
        method_enum_1.methodEnum.POST,
        method_enum_1.methodEnum.PUT,
        method_enum_1.methodEnum.DELETE,
    ],
});
//# sourceMappingURL=cors.js.map