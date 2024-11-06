import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  count = 5;
  time: any;
  constructor(private location: Location) {
    this.time = setInterval(() => {
      this.count--;

      if (this.count == 0) {
        this.location.back();
        clearInterval(this.time);
      }
    }, 1000);
  }

  items = [
    'Hoàng Bảo Khánh',
    'Vương Đức Khánh',
    'Quách Văn Hiển',
    'Nguyễn Tùng Lâm',
  ];

  highlightedIndices: Set<number> = new Set(); // Sử dụng Set để lưu các chỉ số đã tô màu

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    let index = 0; // Bắt đầu từ phần tử cuối
    const intervalId = setInterval(() => {
      if (index <= this.items.length) {
        this.highlightedIndices.add(index); // Thêm chỉ số hiện tại vào Set
        index++;
      } else {
        clearInterval(intervalId); // Dừng interval khi hoàn thành
      }
    }, 950); // Chạy mỗi 1 giây
  }
}
