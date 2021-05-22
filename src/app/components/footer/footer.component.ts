import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ray-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
}
