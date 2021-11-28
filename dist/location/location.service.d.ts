export declare class LocationService {
    constructor();
    get paramsWeather(): {
        appid: string;
        units: string;
        lang: string;
    };
    findOne({ lat, lon }: {
        lat: any;
        lon: any;
    }): Promise<{
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
