import { PassengerService } from './passenger.service';
import { PassengerDTO } from './dto/passenger.dto';
export declare class PassengerController {
    private readonly passengerService;
    constructor(passengerService: PassengerService);
    create(passengerDTO: PassengerDTO): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    findAll(): Promise<import("../common/interfaces/passenger.interface").IPassenger[]>;
    findOne(id: string): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    update(id: string, passengerDTO: PassengerDTO): Promise<import("../common/interfaces/passenger.interface").IPassenger>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
