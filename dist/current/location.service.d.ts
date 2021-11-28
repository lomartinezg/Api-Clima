export declare class LocationService {
    constructor();
    get paramsMapbox(): {
        access_token: string;
        limit: number;
        language: string;
    };
    get paramsWeather(): {
        appid: string;
        units: string;
        lang: string;
    };
    findAll(): Promise<{
        zone: any;
        desc: any;
        min: any;
        max: any;
        temp: any;
    }>;
    findOne(q: string): Promise<{
        zone: any;
        desc: any;
        min: any;
        max: any;
        temp: any;
    }>;
}
