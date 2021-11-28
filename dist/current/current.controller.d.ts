import { CurrentDto } from './dto/current';
import { CurrentService } from './current.service';
export declare class CurrentController {
    private readonly currentsService;
    constructor(currentsService: CurrentService);
    findOne(payload: CurrentDto): Promise<{
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
