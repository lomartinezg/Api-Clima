import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    findAll(): Promise<import("../common/interfaces/user.interface").IUser[]>;
    findOne(id: string): Promise<import("../common/interfaces/user.interface").IUser>;
    update(id: string, userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
