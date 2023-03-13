import { Component, OnInit } from '@angular/core';
import { Task } from '../types/task';

@Component({
  selector: 'app-employees-progress',
  templateUrl: './employees-progress.component.html',
  styleUrls: ['./employees-progress.component.scss']
})
export class EmployeesProgressComponent implements OnInit {

  allTasks?: Task[];
  employeeMap: {[key: string]: any} = {};
  employeeTasksResult: any[] = [];
  tasksExpectedTime: any[] = [];
  finalResult: any[] = [];

  constructor() { }

  async ngOnInit() {

    try {

      const response = await fetch('http://localhost:3000/task');

      if (response.ok) {

        this.allTasks = await response.json();
        
        this.formatTasksByEmployee(this.allTasks!);
        
      }

    } catch(error) {

      console.log(error);
      throw new Error('Oooops something went wrong');

    }
  }

  formatTasksByEmployee(value: Task[]) {

    value.forEach((task: Task) => {

      if (this.employeeMap[task.employee.id]) {

        this.employeeMap[task.employee.id]["employee task time"] += (new Date(task.end_date).getTime() - new Date(task.start_date).getTime());
        this.employeeMap[task.employee.id]["task estimated time"] += (new Date(task.ext_date).getTime() - new Date(task.start_date).getTime());

      } else {

        this.employeeMap[task.employee.id] = {};
        this.employeeMap[task.employee.id]["name"] = `${task.employee.last_name} ${task.employee.first_name}`;
        this.employeeMap[task.employee.id]["employee task time"] = 0 + (new Date(task.end_date).getTime() - new Date(task.start_date).getTime());
        this.employeeMap[task.employee.id]["task estimated time"] = 0 + (new Date(task.ext_date).getTime() - new Date(task.start_date).getTime());

      }
      
    });

    for (let key in this.employeeMap) {

      this.finalResult.push({name: this.employeeMap[key]["name"], series: [{name: "Task estimated time", value: this.employeeMap[key]["task estimated time"]/(3.6e+6)}, {name: "Employee task time", value: this.employeeMap[key]["employee task time"]/(3.6e+6)}]});

    }

    console.log(this.finalResult);

  }

}
