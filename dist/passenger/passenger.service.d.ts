import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
export declare class PassengerService {
    private readonly model;
    constructor(model: Model<IPassenger>);
    create(passengerDTO: PassengerDTO): Promise<IPassenger>;
    findAll(): Promise<IPassenger[]>;
    findOne(id: string): Promise<IPassenger>;
    update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
