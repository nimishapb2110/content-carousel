import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from '../shared/destination.service';
import { CarouselModel } from '../carousel/carousel.model';
import { Theme } from '../shared/theme.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() theme: Theme;
  carouselDataList: Array<CarouselModel>;
  constructor( private destinationService: DestinationService ) { }

  ngOnInit() {
    this.carouselDataList = this.destinationService.getDestinationList();
  }
  get primary() {
    return this.theme.primary;
  }

}
