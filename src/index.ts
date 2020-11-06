import * as moment from 'moment';

/**
 * Map iso8601 string to moment object
 * @param entityAsJson
 */
export function walkPropertiesAndMapDateStrAsMoment(entityAsJson:any) {
    if (!entityAsJson) {
        return
    }
    for (const property of Object.keys(entityAsJson)) {
        if (entityAsJson?.[property] && Array.isArray(entityAsJson?.[property])) {
            for (const arrayElt of entityAsJson?.[property]) {
                walkPropertiesAndMapDateStrAsMoment(arrayElt)
            }
        } else {
            if (entityAsJson?.[property] && moment(entityAsJson?.[property], "YYYY-MM-DDTHH:mm:ss.sssZ", true).isValid()) {
                entityAsJson[property] = moment(entityAsJson?.[property])
            }
        }
    }
}
