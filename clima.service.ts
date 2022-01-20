import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService  {

  apiKey = 'a5f1dd4c7311311890833f36c8cf46b3';
  URL='';

  constructor(private http: HttpClient) {

    
    this.URL=`api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;
  }

  getClima (cityName: string, countryCode: string) {
    return this.http.get(`${this.URL}${cityName},${countryCode}`);

  }
}
