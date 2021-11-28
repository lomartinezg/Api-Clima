import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';
import { HttpStatus } from '@nestjs/common';
import { PassengerService } from 'src/passenger/passenger.service';
export declare class FlightController {
    private readonly flightService;
    private readonly passengerService;
    constructor(flightService: FlightService, passengerService: PassengerService);
    create(flightDTO: FlightDTO): Promise<import("../common/interfaces/flight.interface").IFlight>;
    findAll(): Promise<import("../common/interfaces/flight.interface").IFlight[]>;
    findOne(id: string): Promise<import("../common/interfaces/flight.interface").IFlight>;
    update(id: string, flightDTO: FlightDTO): Promise<import("../common/interfaces/flight.interface").IFlight>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
    addPassenger(flightId: string, passengerId: string): Promise<import("../common/interfaces/flight.interface").IFlight>;
}
