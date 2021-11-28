import { Injectable } from '@nestjs/common';
import { environment } from '../environments/environment';
import { CurrentDto } from './dto/current';

const axios = require('axios');

@Injectable()
export class CurrentService {
  constructor() {}

  get paramsWeather() {
      return {
          appid: environment.API_KEY,
          units: 'metric',
          lang: 'es'
      }
  }

  async findOne( q: CurrentDto ) {

    try {
        
        const instance = axios.create({
            baseURL: environment.APP_URL,
            params: { ...q, ...this.paramsWeather }
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
