import { CurrentDto } from './dto/current';
export declare class CurrentService {
    constructor();
    get paramsWeather(): {
        appid: string;
        units: string;
        lang: string;
    };
    findOne(q: CurrentDto): Promise<{
        pais: any;
        ciudad: any;
        clima: any;
        lat: any;
        lon: any;
        min: any;
        max: any;
        temp: any;
        humedad: any;
    }>;
}
