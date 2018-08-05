import { Injectable } from '@angular/core';
import { CarouselModel } from '../carousel/carousel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  constructor( private http: HttpClient ) { }

  getDestinationList() {
    return this.http.get<CarouselModel[]>('../../assets/mock/destinations.json');
  }
}
