import { Component, OnInit } from '@angular/core';
import {AlertBoxComponent} from '../alert-box/alert-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showDiv = {
    previous : true,
    current : false,
    next : false,
    media : false

  }

  isShowDiv = false;

  openAlertBox(){
    const dialogRef = this.dialog.open(AlertBoxComponent, {
      width: '800px',
      data: 'filter'
    });
  }
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
