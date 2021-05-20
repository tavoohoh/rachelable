import {Directive, OnInit} from "@angular/core";
import {ServiceClass} from "@app/classes/service.class";

@Directive()
export class PageClass implements OnInit {
  public context: { [key: string]: any };

  constructor(private contextService: ServiceClass) {}

  async ngOnInit(): Promise<void> {
    await this.getContext();
  }

  async getContext(): Promise<void> {
    this.context = await this.contextService.get().toPromise();
  }
}
