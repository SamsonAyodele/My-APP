import { RoomsService } from './../rooms/services/rooms.service';
import { EmployeeComponent } from './../employee/employee.component';
import { Component, OnInit, AfterContentInit, ContentChild, Host } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers :[RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

    @ContentChild(EmployeeComponent) employee ! : EmployeeComponent;

  constructor(@Host() private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

    ngAfterContentInit() {
      this.employee.empName = 'Rick';
    }
}
