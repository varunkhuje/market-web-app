import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  name: string;
  market: string;
  category: string;
  brand: string;
  created: number;
  modified: number;
  status: string;
  createdby: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  {position: 1, name: 'ABC', market: 'CEGB', category: 'BEV', brand: 'Pepsi', created: 4444444444, modified: 55555555, status: 'Completed', createdby: 'James'},
  

 
];


@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {

  displayedColumns: string[] = ['select','name', 'market', 'category',  'brand', 'created', 'modified', 'status', 'createdby'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  search="";

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }




  brand = new FormControl();
  brandList: string[] = ['Brand-1 ', 'Brand-2', 'Brand-3', 'Brand-4', 'Brand-5'];

  market = new FormControl();
  marketList: string[] = ['Market-1 ', 'Market-2', 'Market-3', 'Market-4', 'Market-5'];

  category = new FormControl();
  categoryList: string[] = ['Snacks', 'Beverages'];

  constructor() { }

  ngOnInit(): void {
  }

}

