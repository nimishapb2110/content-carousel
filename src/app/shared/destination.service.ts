import { Injectable } from '@angular/core';
import { CarouselModel } from '../carousel/carousel.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destinationList: Array<CarouselModel>;
  private destinationData = new Subject<Array<CarouselModel>>();
  constructor( private http: HttpClient ) { }

  getDestinationUpdatedListener() {
    return this.destinationData.asObservable();
  }

  getDestinationList() {
    return this.http.get<Array<CarouselModel>>('../../assets/mock/destinations.json');
  }
}
