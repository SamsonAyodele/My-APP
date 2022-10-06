import { RoomList } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = []

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnChanges(changes:SimpleChange): void {
    console.log(changes);
   
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

}
