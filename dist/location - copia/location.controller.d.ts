import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationsService;
    constructor(locationsService: LocationService);
    findOne(q: string): Promise<{
        zone: any;
        desc: any;
        min: any;
        max: any;
        temp: any;
    }>;
}
