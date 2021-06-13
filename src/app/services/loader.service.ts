import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private $loading = new BehaviorSubject<number[]>([]);

  public asObservable(): Observable<boolean> {
    return this.$loading.asObservable().pipe(map((value => {
      return value.length > 0;
    })));
  }

  public get(): boolean {
    return this.$loading.value.length > 0;
  }

  public add(): boolean {
    const loading = this.$loading.value;
    loading.push(1);
    this.$loading.next(loading);
    return this.get();
  }

  public remove(): boolean {
    if (this.$loading.value.length > 0) {
      const loading = this.$loading.value;
      loading.shift();
      this.$loading.next(loading);
    }

    return this.get();
  }
}
