import { Injectable } from '@nestjs/common';
import { environment } from '../environments/environment';

const axios = require('axios');

@Injectable()
export class LocationService {
  constructor() {}

    get paramsWeather() {
        return {
            appid: environment.API_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async findOne( {lat, lon} ) {

        try {
            
            const instance = axios.create({
                baseURL: environment.APP_URL,
                params: { lat, lon, ...this.paramsWeather }
            })

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
            }

        } catch (error) {
            console.log(error);
        }

    }

}
