"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkPropertiesAndMapDateStrAsMoment = void 0;
const moment = require("moment");
function walkPropertiesAndMapDateStrAsMoment(entityAsJson) {
    if (!entityAsJson) {
        return;
    }
    for (const property of Object.keys(entityAsJson)) {
        if ((entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property]) && Array.isArray(entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property])) {
            for (const arrayElt of entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property]) {
                walkPropertiesAndMapDateStrAsMoment(arrayElt);
            }
        }
        else {
            if ((entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property]) && moment(entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property], "YYYY-MM-DDTHH:mm:ss.sssZ", true).isValid()) {
                entityAsJson[property] = moment(entityAsJson === null || entityAsJson === void 0 ? void 0 : entityAsJson[property]);
            }
        }
    }
}
exports.walkPropertiesAndMapDateStrAsMoment = walkPropertiesAndMapDateStrAsMoment;
//# sourceMappingURL=index.js.map