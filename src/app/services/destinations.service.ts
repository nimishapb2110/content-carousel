import { Injectable } from '@angular/core';
import { CarouselModel } from '../carousel/carousel.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
    slides: Array<CarouselModel> = [
        { 'src': '../../assets/soci1.png', title: 'Destination 1', description: 'During the holiday period in July, August and the beginning of September, we expect greater pressure at Amsterdam Airport Schiphol. Avoid missing your flight and read all the information and tips here.' },
        { 'src': '../../assets/soci2.png', title: 'Some Title', description: 'Sample 2' },
        { 'src': '../../assets/soci3.png', title: 'Some Title', description: 'Sample 3' },
        { 'src': '../../assets/soci4.png', title: 'Some Title', description: 'Sample 4' },
        { 'src': '../../assets/soci5.png', title: 'Some Title', description: 'Sample 5' }
      ];

  constructor() { }

  getDestinationList() {
      return this.slides;
  }
}
