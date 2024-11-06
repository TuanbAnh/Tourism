import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
})
export class TourComponent {
  Api: any = [];

  constructor(private api: ApiService) {
    this.api.getById('Trong Nước').subscribe((data) => {
      this.Api = data;
    });
  }
}
