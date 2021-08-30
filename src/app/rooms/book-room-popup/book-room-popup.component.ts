import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRoom } from 'src/app/interfaces/rooms.interface';

@Component({
  selector: 'app-book-room-popup',
  templateUrl: './book-room-popup.component.html',
  styleUrls: ['./book-room-popup.component.scss']
})
export class BookRoomPopupComponent implements OnInit {

  public bookingInfo: any;

  constructor(
    private dialogRef: MatDialogRef<BookRoomPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public roomDetail: IRoom
  ) { }

  ngOnInit(): void {
    this.bookingInfo = {
      fromDate: "",
      toDate: ""
    };
  }

  isRequiredDataProvided(): boolean {
    if (!this.bookingInfo.fromDate && !this.bookingInfo.toDate) {
      return false;
    }
    return true;
  }

  confirmBooking() {
    this.dialogRef.close(this.bookingInfo)
  }
}
