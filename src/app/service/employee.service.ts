import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee() {
    return [
      {"id": 1,"name":"Andrew","age":30},
      {"id": 2,"name":"Brandon","age":32},
      {"id": 3,"name":"Christina","age":34},
      {"id": 4,"name":"Elena","age":36}
    ];
  }
}
