import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-progress',
  templateUrl: './employee-progress.component.html',
  styleUrls: ['./employee-progress.component.scss']
})

export class EmployeeProgressComponent implements OnInit {

  hourInMillis: number = 3600000;

  @Input() tasks?: any;
  employeeId!: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
    });
    
    console.log(this.employeeId);
    
  }

  formatEmployeeTimeResults(value: any) {
    return [{ name: 'Employee Tasks Time', series: value.map((task: any) => {
      return {name: task.difficulty, value: new Date(task.end_date.getTime() - task.start_date.getTime())}
    })}];
  }

  formatEmployeeProgressResults(value: any) {
    return [{ name: 'Employee progress', series: value.map((task: any) => {
      return {name: task.difficulty, value: this.calculateEmployeePerformance(task.start_date, task.end_date, (task.difficulty * this.hourInMillis))}
    })}];
  }

  calculateEmployeePerformance(startDate: Date, endDate: Date, extDate: number) {
    return extDate - (endDate.getTime() - startDate.getTime());
  }

}
