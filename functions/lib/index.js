"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("firebase");
const admin = require("firebase-admin");
const environment_1 = require("./environment");
admin.initializeApp({
    credential: admin.credential.cert(environment_1.environment.serviceAccount),
    databaseURL: environment_1.environment.firebaseConfig.databaseURL,
});
firebase_1.default.initializeApp(environment_1.environment.firebaseConfig);
var health_route_1 = require("./routes/health.route");
Object.defineProperty(exports, "health", { enumerable: true, get: function () { return health_route_1.health; } });
var basic_info_route_1 = require("./routes/basic-info.route");
Object.defineProperty(exports, "basicInfo", { enumerable: true, get: function () { return basic_info_route_1.basicInfo; } });
//# sourceMappingURL=index.js.map