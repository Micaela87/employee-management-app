import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees?: any[];

  async ngOnInit() {

    try {

      const response = await fetch('http://localhost:3000/employee/');

      if (response.ok) {
        this.employees = await response.json();
      }

    } catch(error) {
      throw new Error('Ooops something went wrong');
    }
    
  }

  objectKeys(value: any) {
    return Object.keys(value);
  }

  isArray(value: any) {
    return Array.isArray(value);
  }
}
