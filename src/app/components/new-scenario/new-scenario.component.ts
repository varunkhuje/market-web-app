import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-new-scenario',
  templateUrl: './new-scenario.component.html',
  styleUrls: ['./new-scenario.component.css']
})
export class NewScenarioComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Country-1', 'Country-2', 'Country-3', 'Country-4', 'Country-5', 'Country-6'];

  constructor(    private commonService:CommonService, 
    ) { }

  ngOnInit(): void {
    // this.commonService.test()
    // .subscribe(
    //   data => {
    //    console.log('k');
    //   },
    //   error => {
    //     console.log(error);
    // });
  }

}
