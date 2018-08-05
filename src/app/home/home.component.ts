import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from '../shared/destination.service';
import { CarouselModel } from '../carousel/carousel.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() blueThemeSelectedFlag;
  destinationListObservable: Observable<CarouselModel[]>;
  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinationListObservable = this.destinationService.getDestinationList();
  }
}
