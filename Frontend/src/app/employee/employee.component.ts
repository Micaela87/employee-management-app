import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeId?: string;

  employee: any = {
    id: '1234',
    email: 'milano.micael@gmail.com',
    username: 'm.milano',
    password: '25Aprile87',
    first_name: 'Micaela',
    last_name: 'Milano',
    birthdate: new Date('25/04/1987'),
    phone: '3427993642',
    contract_start_date: new Date('01/01/2022'),
    contract_exp_date: new Date('01/01/2024'),
    tasks: [
      {
        id: '',
        title: 'ABC1',
        difficulty: 1,
        start_date: new Date('01/01/2022 09:50:55'),
        end_date: new Date('01/01/2022 10:50:55'),
      },
      {
        id: '',
        title: 'ABC2',
        difficulty: 2,
        start_date: new Date('01/01/2022 10:52:55'),
        end_date: new Date('01/01/2022 12:52:55'),
      },
      {
        id: '',
        title: 'ABC3',
        difficulty: 2,
        start_date: new Date('01/01/2022 12:54:55'),
        end_date: new Date('01/01/2022 13:54:55'),
      },
      {
        id: '',
        title: 'ABC3',
        difficulty: 3,
        start_date: new Date('01/01/2022 14:54:55'),
        end_date: new Date('01/01/2022 15:25:55'),
      },
      {
        id: '',
        title: 'ABC3',
        difficulty: 3,
        start_date: new Date('01/01/2022 15:27:55'),
        end_date: new Date('01/01/2022 15:45:55'),
      },
      {
        id: '',
        title: 'ABC3',
        difficulty: 4,
        start_date: new Date('01/01/2022 16:47:55'),
        end_date: new Date('01/01/2022 16:55:55'),
      }
    ]
  };

  async ngOnInit() {

    try {

      const response = await fetch('http://localhost:3000/employee/' + this.employeeId);

      if (response.ok) {
        this.employee = await response.json();
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
