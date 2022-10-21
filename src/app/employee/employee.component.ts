import { RoomsService } from './../rooms/services/rooms.service';
import { Component, OnInit, Self } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  //providers :[RoomsService] //local instance
})
export class EmployeeComponent implements OnInit {

  empName: string = 'John';

  constructor( private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

}
