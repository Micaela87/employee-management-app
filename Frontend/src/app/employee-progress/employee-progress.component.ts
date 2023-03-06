import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-employee-progress',
  templateUrl: './employee-progress.component.html',
  styleUrls: ['./employee-progress.component.scss']
})

export class EmployeeProgressComponent implements OnInit {

  employee: any = 
  {
    id: '',
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
      }
    ]
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  objectKeys(value: any) {
    return Object.keys(value);
  }

  isArray(value: any) {
    return Array.isArray(value);
  }

  formatResults(value: any) {
    return [{ name: 'Employee progress', series: value.map((task: any) => {
      return {name: task.difficulty, value: new Date(task.end_date.getTime() - task.start_date.getTime()).getHours()}
    })}];
  }

}
