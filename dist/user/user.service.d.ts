import { UserDTO } from './dto/user.dto';
import { HttpStatus } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly model;
    constructor(model: Model<IUser>);
    checkPassword(password: string, passwordDB: string): Promise<boolean>;
    findByUsername(username: string): Promise<IUser & import("mongoose").Document<any, any>>;
    hashPassword(password: string): Promise<string>;
    create(userDTO: UserDTO): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findOne(id: string): Promise<IUser>;
    update(id: string, userDTO: UserDTO): Promise<IUser>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
