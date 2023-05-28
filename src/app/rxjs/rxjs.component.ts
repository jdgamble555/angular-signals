import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>{{ x1 | async }}</p>
    <button (click)="increment()">Double</button>
  `
})
export class RxjsComponent { 
  readonly x = new BehaviorSubject(1);
  readonly x1 = this.x.pipe(map((v) => v * 2));

  increment() {
    this.x.next(this.x.value + 1);
  }
}

