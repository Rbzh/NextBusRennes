import { injectable } from 'inversify';
import axios from "axios";
import { StarbusInformation } from '../../model/starbus-models';

@injectable()
export class BusTimeService {


    public getBusTimeToCityCentre(): Promise<StarbusInformation> {
        let request =
            axios.get('https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-circulation-passages-tr&q=%22Jeanne+d%27Arc%22&rows=2&facet=nomcourtligne&facet=sens&facet=destination&facet=precision&refine.nomcourtligne=C3&refine.destination=Henri+Fr%C3%A9ville').then(response => {
                console.log(response.data);
                return response.data;
            }).catch(err => {
                return err;
            });
        return request;
    }

    public getBusTimeToPeriphery(): Promise<StarbusInformation> {
        let request =
            axios.get('https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-circulation-passages-tr&q=%22Jeanne+d%27Arc%22&rows=2&facet=nomcourtligne&facet=sens&facet=destination&facet=precision&refine.nomcourtligne=C3&refine.destination=Saint-Laurent').then(response => {
                console.log(response.data);
                return response.data;
            }).catch(err => {
                return err;
            });
        return request;
    }


}

