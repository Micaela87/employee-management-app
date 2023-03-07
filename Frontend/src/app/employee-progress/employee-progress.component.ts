import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-progress',
  templateUrl: './employee-progress.component.html',
  styleUrls: ['./employee-progress.component.scss']
})

export class EmployeeProgressComponent implements OnInit {

  tasks?: Task[];
  employeeId!: string;
  taskTime: any = [];
  employeeProgress: any = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {

    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
    });
    
    if (this.employeeId) {
      
      try {

        const response = await fetch('http://localhost:3000/employee/' + this.employeeId);

        if (response.ok) {
          
          const employee = await response.json();

          console.log(employee);

          this.tasks = employee.tasks;

          console.log(this.tasks);

          this.taskTime = this.formatEmployeeTimeResults(this.tasks);
          this.employeeProgress = this.formatEmployeeProgressResults(this.tasks);

          console.log(this.taskTime, this.employeeProgress);
        }

      } catch(error) {
        console.log(error);
        throw new Error('Ooops something went wrong');

      }
      
    }
    
  }

  formatEmployeeTimeResults(value: any) {
    console.log(value);
    return [{ name: 'Employee Tasks Time', series: value.map((task: any) => {
      return {name: task.difficulty, value: new Date(new Date(task.end_date).getTime() - new Date(task.start_date).getTime()).getHours()}
    })}];
  }

  formatEmployeeProgressResults(value: any) {
    return [{ name: 'Employee progress', series: value.map((task: any) => {
      return {name: task.difficulty, value: this.calculateEmployeePerformance(new Date(task.end_date), new Date(task.ext_date))}
    })}, {name: 'Task expected time', series: value.map((task: any) => {
      return {name: task.difficulty, value: new Date(task.ext_date).getHours()}
    })}];
  }

  calculateEmployeePerformance(endDate: Date, extDate: Date) {
    return new Date(extDate.getTime() - endDate.getTime()).getHours();
  }

}
