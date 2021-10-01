import { Component, OnInit } from '@angular/core';
import {OpenDialogComponent} from '../open-dialog/open-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  model:any;
  constructor(public dialog: MatDialog,){
    this.model = {name: '' , age: null, ifPrint: false};
  }
  formSubmit(){
    console.log('form submit request');
  }

  open()
{
  const dialogRef = this.dialog.open(OpenDialogComponent, {
    width: '800px',
    data: 'filter'
  });
}
  ngOnInit(): void {
  }



  // dialogRef.afterClosed().subscribe(result => {

  // });

}
