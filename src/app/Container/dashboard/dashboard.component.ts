import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  events: string[] = [];
  opened: boolean = true;

  toggleSideMenu() {
    this.opened = !this.opened;
  }
}
