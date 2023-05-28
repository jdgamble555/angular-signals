import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <router-outlet></router-outlet>
  <p></p>
  <ng-container *ngIf="this.router.routerState.snapshot.url === '/rxjs'">
    <p><a routerLink="/">See Signal Version</a></p>
  </ng-container>
  <ng-container *ngIf="this.router.routerState.snapshot.url === '/'">
    <p><a routerLink="/rxjs">See Rxjs Version</a></p>
  </ng-container>  
  `
})
export class AppComponent {
  constructor(public router: Router) { }
}
