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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastService = void 0;
const common_1 = require("@nestjs/common");
const environment_1 = require("../environments/environment");
const axios = require('axios');
let ForecastService = class ForecastService {
    constructor() { }
    get paramsWeather() {
        return {
            cnt: '5',
            appid: environment_1.environment.API_KEY,
            units: 'metric',
            lang: 'es'
        };
    }
    async findOne(q) {
        try {
            const instance = axios.create({
                baseURL: environment_1.environment.API_URL,
                params: Object.assign(Object.assign({}, q), this.paramsWeather)
            });
            const resp = await instance.get();
            const { list, city } = resp.data;
            return [{
                    pais: city.country,
                    ciudad: city.name,
                    lat: city.coord.lat,
                    lon: city.coord.lon,
                }, list];
        }
        catch (error) {
            console.log(error);
        }
    }
};
ForecastService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ForecastService);
exports.ForecastService = ForecastService;
//# sourceMappingURL=forecast.service.js.map