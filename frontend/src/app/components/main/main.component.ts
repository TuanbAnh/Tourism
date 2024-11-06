import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  imageList: any = [
    'https://www.vietnamtravelgroup.com.vn/image-process/get-image-v3?path=/datafiles/32985/upload/images/banner/banner-slide-1%281%29.jpg&width=0',
    'https://www.vietnamtravelgroup.com.vn/image-process/get-image-v3?path=/datafiles/32985/upload/images/banner/Banner%20Slider%20TRungQuocOp5.jpg&width=0',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-3.png?t=1717686904',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-2.png?t=1717686701',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-4.png?t=1717686875',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-5.png?t=1717686984',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-1.png?t=1717686516',
    'https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/banner/Banner-slider-6.png?t=1717687014',
  ];
  selectedImage = 1;
  ouSize = false;

  Api: any = [];

  constructor(private api: ApiService) {
    this.api.getAll().subscribe((data) => {
      this.Api = data;
      console.log('data: ' + data);
    });
    console.log('api: ' + this.Api);
  }

  ngOnInit(): void {
    if (this.ouSize) {
      this.sileImage();
    }
  }

  left() {
    this.selectedImage > 0
      ? this.selectedImage--
      : (this.selectedImage = this.imageList.length - 1);
  }
  right() {
    this.selectedImage < this.imageList.length - 1
      ? this.selectedImage++
      : (this.selectedImage = 0);
  }

  sileImage() {
    setInterval(() => {
      this.right();
    }, 900);
  }
}
