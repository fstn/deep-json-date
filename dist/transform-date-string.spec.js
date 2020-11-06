"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const index_1 = require("./index");
describe('walkPropertiesAndMapDateStrAsMoment', () => {
    it('should map date as moment', async () => {
        const stayAbroadsList = {
            "id": 1,
            "haveStay": true,
            "isStage": true,
            "staysAbroad": [{
                    "version": 1,
                    "updatedAt": "2020-09-03T04:00:23.298Z",
                    "createdAt": "2020-09-03T04:00:23.298Z",
                    "id": 716,
                    "country": "635656",
                    "precision": null,
                    "beginDate": "2020-09-16T06:00:18.000Z",
                    "endDate": "2020-09-01T06:00:22.000Z"
                }]
        };
        index_1.walkPropertiesAndMapDateStrAsMoment(stayAbroadsList);
        expect(stayAbroadsList.staysAbroad[0].beginDate).toStrictEqual(moment("2020-09-16T06:00:18.000Z"));
        expect(stayAbroadsList.staysAbroad[0].endDate).toStrictEqual(moment("2020-09-01T06:00:22.000Z"));
    });
});
//# sourceMappingURL=transform-date-string.spec.js.map