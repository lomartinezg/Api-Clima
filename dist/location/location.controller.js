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
exports.LocationController = void 0;
const location_service_1 = require("./location.service");
const location_1 = require("./dto/location");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let LocationController = class LocationController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    findOne(payload) {
        return this.locationsService.findOne(payload);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Weather data for one Location consulted by latitude y longitude' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_1.LocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "findOne", null);
LocationController = __decorate([
    swagger_1.ApiTags('location'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('v1/location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map