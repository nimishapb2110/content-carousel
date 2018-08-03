import { Component, OnInit, Input } from '@angular/core';
import { CarouselModel } from './carousel.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carouselDataListObs: Observable<Array<CarouselModel>>;
  carouselDataList: Array<CarouselModel>;
  currentIndex = 0;
  currentSelection: CarouselModel;
  ngOnInit() {
      this.carouselDataListObs.subscribe(( data: Array<CarouselModel> ) => {
      this.carouselDataList = data;
      this.currentSelection = data ? data[ this.currentIndex ] : null;
    });
  }
  showPrevious() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.carouselDataList.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    this.setCurrentSelection();
  }
  showNext() {
    if (this.currentIndex + 1 === this.carouselDataList.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.setCurrentSelection();
  }
  setCurrentSelection() {
    if (this.currentIndex < this.carouselDataList.length) {
      this.currentSelection = this.carouselDataList[this.currentIndex];
    }
  }
}
