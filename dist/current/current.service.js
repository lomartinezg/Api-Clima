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
exports.CurrentService = void 0;
const common_1 = require("@nestjs/common");
const environment_1 = require("../environments/environment");
const axios = require('axios');
let CurrentService = class CurrentService {
    constructor() { }
    get paramsWeather() {
        return {
            appid: environment_1.environment.API_KEY,
            units: 'metric',
            lang: 'es'
        };
    }
    async findOne(q) {
        try {
            const instance = axios.create({
                baseURL: environment_1.environment.APP_URL,
                params: Object.assign(Object.assign({}, q), this.paramsWeather)
            });
            const resp = await instance.get();
            const { coord, weather, main, sys, name } = resp.data;
            return {
                pais: sys.country,
                ciudad: name,
                clima: weather[0].description,
                lat: coord.lat,
                lon: coord.lon,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
                humedad: main.humidity
            };
        }
        catch (error) {
            console.log(error);
        }
    }
};
CurrentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CurrentService);
exports.CurrentService = CurrentService;
//# sourceMappingURL=current.service.js.map