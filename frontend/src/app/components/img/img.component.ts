import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent {
  Api: any;

  constructor(private api: ApiService) {
    this.api.getAll().subscribe((data) => {
      this.Api = data;
    });
  }
}
