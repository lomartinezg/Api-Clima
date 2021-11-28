import { ForecastDto } from './dto/forecast';
import { ForecastService } from './forecast.service';
export declare class ForecastController {
    private readonly forecastService;
    constructor(forecastService: ForecastService);
    findOne(payload: ForecastDto): Promise<any[]>;
}
