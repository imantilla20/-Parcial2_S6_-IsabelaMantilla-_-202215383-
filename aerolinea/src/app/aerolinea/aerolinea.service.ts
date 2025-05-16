import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from './Aerolinea';

@Injectable({
  providedIn: 'root'
})

export class AerolineaService {
private url = environment.baseUrl;
private urlaerolineas = environment.baseUrl + 'flights.json';

constructor(private http: HttpClient) {}

getAerolineas() {
  return this.http.get<Aerolinea[]>(this.urlaerolineas);
}
getAerolineaById(id: number) {
  return this.http.get<Aerolinea>(this.url+id+'/trainers.json');}
}
