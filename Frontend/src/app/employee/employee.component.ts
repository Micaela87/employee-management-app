import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees?: any[];

  labelsMap: {[key: string]: string[]} = {
    "email": ["Email", "string"],
    "username": ["Username", "string"],
    "password": ["Password", "password"],
    "first_name": ["Nome", "string"],
    "last_name": ["Cognome", "string"],
    "birthdate": ["Data di nascita", "date"],
    "phone": ["Numero di telefono", "string"],
    "contract_start_date": ["Inizio rapporto di lavoro", "date"],
    "contract_exp_date": ["Fine rapporto di lavoro", "date"]
  }

  buttons: {route: string, img: string}[] = [
    {
      route: "/",
      img: "../../assets/src/home.png"
    }
  ]

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

  isDate(key: any) {
    return this.labelsMap[key][1] === "date";
  }

  isPassword(key: any) {
    return this.labelsMap[key][1] === "password";
  }
}
