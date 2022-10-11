import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom! : RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'private suite',
      amenities: 'Air conditioner, Free wi-fi, TV, Bathroom, Kitchen',
      price: 2000,
      photos: 'https://unsplash.com/photos/51adhgg5KkE',
      checkinTime: new Date('10-oct-2022'),
      checkoutTime: new Date('15-oct-2022')
    }

    this.roomList = [...this.roomList, room];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  ngAfterViewChecked(): void {

  }

}
