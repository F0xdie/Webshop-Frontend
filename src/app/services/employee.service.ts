import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Employee[]>('/api/employees');
  }

  getById(id: number) {
    return this.http.get('/api/employees/' + id);
  }


}
