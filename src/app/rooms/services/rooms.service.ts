import { API_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { AppConfig } from './../../AppConfig/appconfig.interface';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { RoomList } from './../rooms';
import { Inject, Injectable } from '@angular/core';
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
  constructor(@Inject(API_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient) {
    console.log(environment.apiEndpoint)
    console.log('Room services initialized...')
   }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  // addRooms() {
  //   return this.http.post<RoomList[]>('/api/rooms', room);
  // }

  // editRooms() {
  //   return this.http.put<RoomList[]>('/api/rooms', room);
  // }
}
