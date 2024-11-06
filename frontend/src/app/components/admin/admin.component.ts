import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string = '';
  time: string = '';
  price: string = '';
  vehcel: string = '';
  type_tour: string = '';
  img: string = '';

  currentStudentID: any;
  constructor(private api: ApiService) {
    this.getAllStudent();
  }
  ngOnInit(): void {}

  getAllStudent() {
    this.api.getAll().subscribe((resultData: any) => {
      this.isResultLoaded = true;
      this.StudentArray = resultData;
    });
  }
  register() {
    let bodyData = {
      name: this.name,
      time: this.time,
      price: this.price,
      vehcel: this.vehcel,
      type_tour: this.type_tour,
      img: this.img,
    };
    this.api.post(bodyData).subscribe({
      next: (resultData: any) => {
        alert('Employee Registered Successfully');
        this.getAllStudent();
      },
      error: (err) => {
        console.error('Error: ', err);
        alert('An error occurred while registering the employee');
      },
    });
  }
  setUpdate(data: any) {
    this.name = data.name;
    this.time = data.time;
    this.price = data.price;
    this.vehcel = data.vehcel;
    this.type_tour = data.type_tour;
    this.img = data.img;

    this.currentStudentID = data.id;
  }
  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }
  UpdateRecords() {
    let bodyData = {
      name: this.name,
      time: this.time,
      price: this.price,
      vehcel: this.vehcel,
      type_tour: this.type_tour,
      img: this.img,
    };
    this.api
      .upadate(this.currentStudentID, bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updateddd');
        this.getAllStudent();
      });
  }
  save() {
    if (this.currentStudentID != null) {
      this.UpdateRecords();
    } else {
      this.register();
    }
    this.name = '';
    this.time = '';
    this.price = '';
    this.vehcel = '';
    this.type_tour = '';
    this.img = '';

    this.currentStudentID = null;
  }
  setDelete(data: any) {
    this.api.delete(data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Student Deletedddd');
      this.getAllStudent();
    });
  }
}
