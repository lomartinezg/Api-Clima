"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecasModule = void 0;
const common_1 = require("@nestjs/common");
const forecast_controller_1 = require("./forecast.controller");
const forecast_service_1 = require("./forecast.service");
let ForecasModule = class ForecasModule {
};
ForecasModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [forecast_controller_1.ForecastController],
        providers: [forecast_service_1.ForecastService],
        exports: [forecast_service_1.ForecastService],
    })
], ForecasModule);
exports.ForecasModule = ForecasModule;
//# sourceMappingURL=forecast.module.js.map