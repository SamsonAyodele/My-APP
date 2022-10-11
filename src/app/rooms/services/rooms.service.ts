import { RoomList } from './../rooms';
import { Injectable } from '@angular/core';
// import { RoomsListComponent } from '../rooms-list/rooms-list.component';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

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

  getRooms() {
    return this.roomList;
  }
}
