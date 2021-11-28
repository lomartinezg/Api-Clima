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
exports.ForecastController = void 0;
const forecast_1 = require("./dto/forecast");
const forecast_service_1 = require("./forecast.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let ForecastController = class ForecastController {
    constructor(forecastService) {
        this.forecastService = forecastService;
    }
    findOne(payload) {
        return this.forecastService.findOne(payload);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '5 day weather forecast consulted by city name - City ​​parameters "q" is optional' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forecast_1.ForecastDto]),
    __metadata("design:returntype", void 0)
], ForecastController.prototype, "findOne", null);
ForecastController = __decorate([
    swagger_1.ApiTags('forecast'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('v1/forecast'),
    __metadata("design:paramtypes", [forecast_service_1.ForecastService])
], ForecastController);
exports.ForecastController = ForecastController;
//# sourceMappingURL=forecast.controller.js.map