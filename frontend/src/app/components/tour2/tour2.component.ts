import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-tour2',
  templateUrl: './tour2.component.html',
  styleUrl: './tour2.component.scss',
})
export class Tour2Component {
  Api: any = [];

  constructor(private api: ApiService) {
    this.api.getById('Nước ngoài').subscribe((data) => {
      this.Api = data;
    });
  }
}
