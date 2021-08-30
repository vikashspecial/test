import { Injectable } from '@angular/core';
import { IRoom } from '../interfaces/rooms.interface';
import { RoomsList } from './data/rooms-data';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  getRoomsList(): IRoom[] {
    return RoomsList;
  }
}
