"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicInfoService = void 0;
const admin = require("firebase-admin");
const collections_enum_1 = require("../enums/collections.enum");
const db = admin.firestore();
const get = () => {
    return db.collection(collections_enum_1.CollectionEnum.BASIC_INFO)
        .get()
        .then((querySnapshot) => { var _a; return (_a = querySnapshot === null || querySnapshot === void 0 ? void 0 : querySnapshot.docs[0]) === null || _a === void 0 ? void 0 : _a.data(); });
};
exports.basicInfoService = {
    get,
};
//# sourceMappingURL=basic-info.service.js.map