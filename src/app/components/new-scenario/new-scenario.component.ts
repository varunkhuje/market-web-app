import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-scenario',
  templateUrl: './new-scenario.component.html',
  styleUrls: ['./new-scenario.component.css']
})
export class NewScenarioComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Country-1', 'Country-2', 'Country-3', 'Country-4', 'Country-5', 'Country-6'];

  constructor() { }

  ngOnInit(): void {
  }

}
