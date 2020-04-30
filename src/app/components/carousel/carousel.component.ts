import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TestimonialModel } from '@app/db/models';

type CarouselModel = [TestimonialModel, TestimonialModel, TestimonialModel];

@Component({
  selector: 'ray-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnChanges {
  @Input() public data: Array<TestimonialModel>;
  @Input() public lang: string;

  public carousel: CarouselModel;
  public carouselIndex = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes && changes.data) {
        this.data = changes.data.currentValue;
      }

      if (changes && changes.lang) {
        this.lang = changes.lang.currentValue;
      }

      if (this.data && this.lang) {
        this.carousel = this.setCarouselData();
      } else {
        console.warn('Carousel: Make sure data and lang are defined');
      }
    }
  }

  private setCarouselData(previous = false): CarouselModel {
    const data: Array<TestimonialModel> = this.data;
    const dataLength = data.length - 1;

    const index = previous ? (this.carouselIndex - 1 >= 0 ? this.carouselIndex - 1 : 0) : this.carouselIndex + 1;
    const operatorIndex = index > dataLength ? 0 : index;
    const indexMinusOne = (operatorIndex - 1) >= 0 && (operatorIndex - 1) <= dataLength ? operatorIndex - 1 : dataLength;
    const indexPlusOne = (operatorIndex + 1) > dataLength ? 0 : operatorIndex + 1;

    let carousel: CarouselModel = [
      data[indexMinusOne],
      data[operatorIndex],
      data[indexPlusOne]
    ];

    this.carouselIndex = operatorIndex;

    return carousel;
  }

  public carouselNavigation(previous = false): void {
    this.carousel = this.setCarouselData(previous);
  }
}
