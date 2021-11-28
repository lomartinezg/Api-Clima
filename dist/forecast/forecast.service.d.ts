import { ForecastDto } from './dto/forecast';
export declare class ForecastService {
    constructor();
    get paramsWeather(): {
        cnt: string;
        appid: string;
        units: string;
        lang: string;
    };
    findOne(q: ForecastDto): Promise<any[]>;
}
