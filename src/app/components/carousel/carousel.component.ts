import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { TestimonialModel } from '@app/db/models';

type CarouselModel = [TestimonialModel, TestimonialModel, TestimonialModel];

enum CardAnimationStates {
  DISPLAYED = 'displayed',
  CARD_OUT = 'cardOut',
  CARD_IN = 'cardIn'
}

const animationDuration = 300;

@Component({
  selector: 'ray-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  animations: [
    trigger('animate', [
      state(CardAnimationStates.DISPLAYED, style({
        right: '0',
        opacity: '1',
        'transition-timing-function': 'ease-in-out'
      })),
      state(CardAnimationStates.CARD_OUT, style({
        right: '100vw',
        opacity: '0.5',
        'transition-timing-function': 'ease-out'
      })),
      state(CardAnimationStates.CARD_IN, style({
        right: '-100vw',
        opacity: '0.5',
        'transition-timing-function': 'ease-in'
      })),
      transition(`${CardAnimationStates.DISPLAYED} => ${CardAnimationStates.CARD_OUT}`, [
        animate(`${animationDuration}ms`)
      ]),
      transition(`${CardAnimationStates.CARD_OUT} => ${CardAnimationStates.CARD_IN}`, [
        animate('0s')
      ]),
      transition(`${CardAnimationStates.CARD_IN} => ${CardAnimationStates.DISPLAYED}`, [
        animate(`${animationDuration}ms`)
      ]),
    ])
  ]
})
export class CarouselComponent implements OnChanges {
  @Input() public data: Array<TestimonialModel>;
  @Input() public lang: string;

  public carousel: CarouselModel;
  public carouselIndex = 0;
  public cardState: CardAnimationStates = CardAnimationStates.DISPLAYED;

  private intervalDuration = 4000;
  private changePageInterval: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes && changes.data) {
        this.data = changes.data.currentValue;
      }

      if (changes && changes.lang) {
        this.lang = changes.lang.currentValue;
      }

      if (this.data && this.lang) {
        this.initAnimation();
      } else {
        console.warn('Carousel: Make sure data and lang are defined');
      }
    }
  }

  public animateCarousel(page?: string): void {
    if (page) {
      this.carouselIndex = Number(page);
    }

    this.initAnimation();
  }

  public initAnimation(): void {
    this.clearAnimation();

    this.changePageInterval = setInterval(() => { 
      this.changeCarouselPage();
    }, this.intervalDuration);
  }

  public clearAnimation(): void {
    clearInterval(this.changePageInterval);
  }

  private changeCarouselPage(): void {
    this.cardState = CardAnimationStates.CARD_OUT;

    setTimeout(() => {
      if (this.carouselIndex + 1 >= this.data.length) {
        this.carouselIndex = 0;
      } else {
        this.carouselIndex = this.carouselIndex + 1;
      }

      this.cardState = CardAnimationStates.CARD_IN;
    }, animationDuration);

    setTimeout(() => {
      this.cardState = CardAnimationStates.DISPLAYED;
    }, animationDuration);
  }

}
