import { EmployeeComponent } from './../employee/employee.component';
import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

    @ContentChild(EmployeeComponent) employee ! : EmployeeComponent;

  constructor() { }

  ngOnInit(): void {
  }

    ngAfterContentInit() {
      this.employee.empName = 'Rick';
    }
}
