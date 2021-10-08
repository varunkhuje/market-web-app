import { Component, OnInit } from '@angular/core';
import {OpenDialogComponent} from '../open-dialog/open-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  showDiv = {
    Mfilter : false,
    current : false,
    tvFilter : false,
    MediaFilter : false
  }

  model:any;
  execution: any = false;
  media:any = false;
  media_graph: any = false;
  media_table: any = false;

  constructor(public dialog: MatDialog,){
      this.model = {name: null, ExeCution: false, Media: false,};
  }

  onExecution(){
    this.execution = true;
    this.media = false;

  }

  showMedia(){
    this.media = true;
    this.execution = false;

  }

    title = 'appComponent';
    
  isShowDiv = true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }


  ngOnInit(): void {
  }

}
