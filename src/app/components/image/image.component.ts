import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ray-img',
  template: `<img #img [src]="src" [alt]="alt ? alt : ''" />`,
})
export class ImageComponent {
  @ViewChild('img', { static: false }) img: ElementRef;
  @Input() src: string;
  @Input() alt: string;

  // constructor(private loader: LoaderService) {}
  //
  // ngOnInit(): void {
  //   this.loader.add();
  // }
  //
  // ngAfterContentInit(): void {
  //   this.onLoad();
  // }
  //
  // public onLoad(): void {
  //   if (this.img) {
  //     setTimeout(() => this.loader.remove(), 500);
  //   } else {
  //     setTimeout(() => this.onLoad(), 100);
  //   }
  // }
}
