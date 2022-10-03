import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/51adhgg5KkE',
      checkinTime: new Date('30-sept-2022'),
      checkoutTime: new Date('01-oct-2022'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wi-fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/51adhgg5KkE',
      checkinTime: new Date('30-sept-2022'),
      checkoutTime: new Date('01-oct-2022'),
    },
    {
      roomNumber: 3,
      roomType: 'Private suite',
      amenities: 'Air conditioner, Free wi-fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://unsplash.com/photos/51adhgg5KkE',
      checkinTime: new Date('30-sept-2022'),
      checkoutTime: new Date('01-oct-2022'),
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    console.log(room)
  }

}
