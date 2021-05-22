import { Component } from '@angular/core'
import { PageClass } from '@app/classes/page.class'
import { BasicInfoService } from '@ser/basic-info.service'
import { BasicInfoModel } from '@mod/db/basic-info.model'

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PageClass {
  public context: BasicInfoModel

  constructor(public service: BasicInfoService) {
    super(service)

    console.log('home')
  }
}
