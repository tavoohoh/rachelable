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

  private changePageInterval: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes && changes.data) {
        this.data = changes.data.currentValue;
      }

      if (changes && changes.lang) {
        this.lang = changes.lang.currentValue;
      }

      if (this.data && this.lang) {
        this.initInterval();
      } else {
        console.warn('Carousel: Make sure data and lang are defined');
      }
    }
  }

  public animateCarousel(page?: string) {
    if (page) {
      this.carouselIndex = Number(page);
    }

    this.initInterval();
  }

  private initInterval() {
    clearInterval(this.changePageInterval);

    this.changePageInterval = setInterval(() => {
      this.changeCarouselPage();
    }, 2000);
  }

  private changeCarouselPage() {
    if (this.carouselIndex + 1 >= this.data.length) {
      this.carouselIndex = 0;
    } else {
      this.carouselIndex = this.carouselIndex + 1;
    }
  }

}
