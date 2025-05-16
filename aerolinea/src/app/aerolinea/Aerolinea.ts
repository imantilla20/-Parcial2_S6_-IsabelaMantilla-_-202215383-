import { Vuelos } from '../vuelos/Vuelos';

export class Trainer {
  id: number;
  airlinename: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights: Array<Vuelos>;

  public constructor(
    id: number,
    airlinename: string,
    country: string,
    city: string,
    address: string,
    identityColor: string,
    slogan: string,
    flights: Array<Vuelos>,
  ) {
    this.id = id;
    this.airlinename = airlinename;
    this.country = country;
    this.city = city;
    this.address = address;
    this.identityColor = identityColor;
    this.slogan= slogan;
    this.flights = flights;
  }
}
