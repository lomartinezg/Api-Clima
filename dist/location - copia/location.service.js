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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const environment_1 = require("../environments/environment");
const axios = require('axios');
let LocationService = class LocationService {
    constructor() { }
    get paramsMapbox() {
        return {
            'access_token': environment_1.environment.APP_URL,
            'limit': 5,
            'language': 'es'
        };
    }
    get paramsWeather() {
        return {
            appid: environment_1.environment.API_KEY,
            units: 'metric',
            lang: 'es'
        };
    }
    async findAll() {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?q=Argentina`,
                params: Object.assign({}, this.paramsWeather)
            });
            const resp = await instance.get();
            const { weather, main, sys } = resp.data;
            return {
                zone: sys.country,
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOne(q) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: Object.assign(Object.assign({}, this.paramsWeather), { q }),
            });
            const resp = await instance.get();
            const { weather, main, sys } = resp.data;
            return {
                zone: sys.country,
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };
        }
        catch (error) {
            console.log(error);
        }
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map