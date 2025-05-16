
export class Vuelos {
  id: number;
  departureAirport: string;
  departureCountry: string;
  departureCity: string;
  arrivalAirport: string;
  arrivalCountry: string;
  arrivalCity: string;
  departureTime: string;
  flightDuration: string;
  image: string;
  

  public constructor(
    id: number,
    departureAirport: string,
  departureCountry: string,
  departureCity: string,
  arrivalAirport: string,
  arrivalCountry: string,
  arrivalCity: string,
  departureTime: string,
  flightDuration: string,
  image: string,
  ) {
    this.id = id;
    this.departureAirport = departureAirport;
    this.departureCountry = departureCountry;
    this.departureCity = departureCity;
    this.arrivalAirport = arrivalAirport;
    this.arrivalCountry = arrivalCountry;
    this.arrivalCity = arrivalCity;
    this.departureTime = departureTime;
    this.flightDuration = flightDuration;
    this.image = image;
  }
}
