import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    signIn(user: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<import("../common/interfaces/user.interface").IUser>;
}
