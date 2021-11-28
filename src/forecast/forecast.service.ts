import { Injectable } from '@nestjs/common';
import { environment } from '../environments/environment';
import { ForecastDto } from './dto/forecast';

const axios = require('axios');

@Injectable()
export class ForecastService {
  constructor() {}

  get paramsWeather() {
      return {
          cnt: '5',
          appid: environment.API_KEY,
          units: 'metric',
          lang: 'es'
      }
  }

  async findOne( q: ForecastDto ) {

    try {
        
        const instance = axios.create({
            baseURL: environment.API_URL,
            params: { ...q, ...this.paramsWeather }
        })

        const resp = await instance.get();
        const { list, city } = resp.data;

            return [{
                pais: city.country,
                ciudad: city.name,
                lat: city.coord.lat,
                lon: city.coord.lon,
                //clima: list.weather.description
            }, list ]

  
      } catch (error) {
          console.log(error);
      }
    }

}
