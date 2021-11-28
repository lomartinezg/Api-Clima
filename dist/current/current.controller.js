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
exports.CurrentController = void 0;
const current_1 = require("./dto/current");
const current_service_1 = require("./current.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let CurrentController = class CurrentController {
    constructor(currentsService) {
        this.currentsService = currentsService;
    }
    findOne(payload) {
        return this.currentsService.findOne(payload);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Current weather data for one location consulted by city name - City ​​parameters "q" is optional' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_1.CurrentDto]),
    __metadata("design:returntype", void 0)
], CurrentController.prototype, "findOne", null);
CurrentController = __decorate([
    swagger_1.ApiTags('current'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('v1/current'),
    __metadata("design:paramtypes", [current_service_1.CurrentService])
], CurrentController);
exports.CurrentController = CurrentController;
//# sourceMappingURL=current.controller.js.map