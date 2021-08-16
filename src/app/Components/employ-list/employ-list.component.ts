import { Component, OnInit } from '@angular/core';
import { Employ } from 'src/app/models/Employ';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.scss']
})
export class EmployListComponent implements OnInit {

  radioButtonSelected = 'All';

  employees: Employ[]=[
    {
      file: 1,
      name: 'Peito',
      lastName: 'Perez',
      sex: 'Male',
      salary: 25000,
    },
    {
      file: 2,
      name: 'Marta',
      lastName: 'Correo',
      sex: 'Female',
      salary: 30000,
    },
    {
      file: 3,
      name: 'Osmar',
      lastName: 'Camacho',
      sex: 'Male',
      salary: 25000,
    },
    {
      file: 1,
      name: 'Sara',
      lastName: 'Corre',
      sex: 'Female',
      salary: 9832,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmploys():number {
    return this.employees.length;
  }

  getTotalEmployeesMale(): number {
    return this.employees.filter(employ => employ.sex === 'Male').length;
  }

  getTotalEmployeesFemale(): number {
    return this.employees.filter(employ => employ.sex === 'Female').length;
  }

  employCountRadioButtonChange(radioButtonSelected: string): void {
    console.log('radioButtonSelected', radioButtonSelected);
    this.radioButtonSelected = radioButtonSelected;
  }
}
