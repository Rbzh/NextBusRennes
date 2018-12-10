import {
    interfaces, controller,  httpPost
} from "inversify-express-utils";

import { inject } from "inversify";
import { BusTimeService } from "./bus-time.service";

@controller("/v1/actions/bus_time")
export class BusTimeController implements interfaces.Controller {

    constructor(@inject('BusTimeService') private busTimeService: BusTimeService) { }

    /**
     * Récupère l'horaire des deux prochains bus vers le centre-ville
     */
    //@httpGet("/city_centre")
    @httpPost("/city_centre")
    public getNextBusToCityCentre() {
        return this.busTimeService.getBusTimeToCityCentre().then(starbusInfo => {
            let nextBusTimes = starbusInfo.records.map(record =>
                record.fields.depart
            ).sort((d1, d2) => {
                let da = new Date(d1);
                let db = new Date(d2);
                return da.getTime() - db.getTime()
            }).map(sortedBusTime => {
                let sortedBusTimeFormatted = new Date(sortedBusTime);
                let hours = sortedBusTimeFormatted.getHours();
                let minutes = sortedBusTimeFormatted.getMinutes();
                return `${hours} heures ${minutes}`
            });
            return this.formatResult(nextBusTimes, "le centre ville");
        });
    }

    /**
     * Formate le résultat de l'appel à l'API
     * @param nextBusTimes horaires formatés des deux prochains bus
     * @param direction direction du bus
     */
    private formatResult(nextBusTimes: String[], direction: String) {
        return { "fulfillmentText": `Le prochain bus C3 vers ${direction} passera à ${nextBusTimes[0]}, et le suivant à ${nextBusTimes[1]}.` };
    }

    /**
     * Récupère l'horaire des deux prochains bus vers la périphérie
     */
    @httpPost("/periphery")
    public getNextBusToPeriphery() {
        return this.busTimeService.getBusTimeToPeriphery().then(starbusInfo => {
            let nextBusTimes = starbusInfo.records.map(record =>
                record.fields.depart
            ).sort((d1, d2) => {
                let da = new Date(d1);
                let db = new Date(d2);
                return da.getTime() - db.getTime()
            }).map(sortedBusTime => {
                let sortedBusTimeFormatted = new Date(sortedBusTime);
                let hours = sortedBusTimeFormatted.getHours();
                let minutes = sortedBusTimeFormatted.getMinutes();
                return `${hours} heures ${minutes}`
            });
            return this.formatResult(nextBusTimes, "la périphérie");
        });
    }

}