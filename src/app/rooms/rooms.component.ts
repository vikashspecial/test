import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { IRoom } from '../interfaces/rooms.interface';
import { RoomsService } from '../services/rooms.service';
import { BookRoomPopupComponent } from './book-room-popup/book-room-popup.component';

import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  public roomsList: IRoom[] = [];

  constructor(
    private roomsService: RoomsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRoomsList();
  }

  bookRoom(room: IRoom): void {
    const dialogRef = this.dialog.open(BookRoomPopupComponent, {
      width: "50rem",
      data: room
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((bookingInfo) => {
      if (bookingInfo) {
        console.log(bookingInfo);
      }
    });

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
