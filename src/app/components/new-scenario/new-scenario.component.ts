import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-new-scenario',
  templateUrl: './new-scenario.component.html',
  styleUrls: ['./new-scenario.component.css']
})
export class NewScenarioComponent implements OnInit {
  countries: any = [];
  categories: any = [];
  selectedCountry: any = "";
  selectedCategory: any = "";

  toppings = new FormControl();

  toppingList: string[] = ['Country-1', 'Country-2', 'Country-3', 'Country-4', 'Country-5', 'Country-6'];

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    // this.commonService.getCountries()
    // .subscribe(
    //   data => {
    //     this.countries = data.countries;
    //     console.log(data.countries);
    //   },
    //   error => {
    //     console.log(error);
    // });

    // this.commonService.getCategories()
    // .subscribe(
    //   data => {
    //     data.categories.map((d:any)=>{
    //         d.isClicked = false;
    //     })
    //     this.categories = data.categories;
    //     console.log(data.categories);
    //   },
    //   error => {
    //     console.log(error);
    // });
  }

  changeCountry(){

  }

}
