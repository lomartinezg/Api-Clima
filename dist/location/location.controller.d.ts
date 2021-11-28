import { LocationService } from './location.service';
import { LocationDto } from './dto/location';
export declare class LocationController {
    private readonly locationsService;
    constructor(locationsService: LocationService);
    findOne(payload: LocationDto): Promise<{
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
