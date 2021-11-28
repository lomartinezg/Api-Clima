"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerModule = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("./../common/models/models");
const mongoose_1 = require("@nestjs/mongoose");
const passenger_controller_1 = require("./passenger.controller");
const passenger_service_1 = require("./passenger.service");
const passenger_schema_1 = require("./schema/passenger.schema");
let PassengerModule = class PassengerModule {
};
PassengerModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.PASSENGER.name,
                    useFactory: () => passenger_schema_1.PassengerSchema,
                },
            ]),
        ],
        controllers: [passenger_controller_1.PassengerController],
        providers: [passenger_service_1.PassengerService],
        exports: [passenger_service_1.PassengerService],
    })
], PassengerModule);
exports.PassengerModule = PassengerModule;
//# sourceMappingURL=passenger.module.js.map