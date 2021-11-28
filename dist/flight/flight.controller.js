"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const flight_dto_1 = require("./dto/flight.dto");
const flight_service_1 = require("./flight.service");
const common_1 = require("@nestjs/common");
const passenger_service_1 = require("../passenger/passenger.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let FlightController = class FlightController {
    constructor(flightService, passengerService) {
        this.flightService = flightService;
        this.passengerService = passengerService;
    }
    create(flightDTO) {
        return this.flightService.create(flightDTO);
    }
    findAll() {
        return this.flightService.findAll();
    }
    findOne(id) {
        return this.flightService.findOne(id);
    }
    update(id, flightDTO) {
        return this.flightService.update(id, flightDTO);
    }
    delete(id) {
        return this.flightService.delete(id);
    }
    async addPassenger(flightId, passengerId) {
        const passenger = await this.passengerService.findOne(passengerId);
        if (!passenger)
            throw new common_1.HttpException('Passenger Not Found', common_1.HttpStatus.NOT_FOUND);
        return this.flightService.addPassenger(flightId, passengerId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flight_dto_1.FlightDTO]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, flight_dto_1.FlightDTO]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "delete", null);
__decorate([
    common_1.Post(':flightId/passenger/:passengerId'),
    __param(0, common_1.Param('flightId')),
    __param(1, common_1.Param('passengerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "addPassenger", null);
FlightController = __decorate([
    swagger_1.ApiTags('flights'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('api/v1/flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        passenger_service_1.PassengerService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map