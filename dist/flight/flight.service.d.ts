import { FlightDTO } from './dto/flight.dto';
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { ILocation } from 'src/common/interfaces/location.interface';
import { IWeather } from 'src/common/interfaces/weather.interface';
export declare class FlightService {
    private readonly model;
    constructor(model: Model<IFlight>);
    getLocation(destinationCity: string): Promise<ILocation>;
    getWeather(woeid: number, flightDate: Date): Promise<IWeather[]>;
    assign({ _id, pilot, airplane, destinationCity, flightDate, passengers }: IFlight, weather: IWeather[]): IFlight;
    create(flightDTO: FlightDTO): Promise<IFlight>;
    findAll(): Promise<IFlight[]>;
    findOne(id: string): Promise<IFlight>;
    update(id: string, flightDTO: FlightDTO): Promise<IFlight>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
    addPassenger(flightId: string, passengerId: string): Promise<IFlight>;
}
