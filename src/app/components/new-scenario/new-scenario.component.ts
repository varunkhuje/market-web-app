import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  submitted = false;
  showsuccessMsg = "Simulation created";
  successful = false;

  toppings = new FormControl();

  toppingList: string[] = ['Country-1', 'Country-2', 'Country-3', 'Country-4', 'Country-5', 'Country-6'];

  constructor(private commonService:CommonService, private router: Router) { }

  ngOnInit(): void {
    this.commonService.getCountries()
    .subscribe(
      data => {
        this.countries = data.countries;
        console.log(data.countries);
      },
      error => {
        console.log(error);
    });

    this.commonService.getCategories()
    .subscribe(
      data => {
        data.categories.map((d:any)=>{
            d.isClicked = false;
        })
        this.categories = data.categories;
        console.log(data.categories);
      },
      error => {
        console.log(error);
    });
  }

  simulationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country_name: new FormControl('', [Validators.required]),
    simulation_category: new FormControl('', [Validators.required]),
  });

  get f(){ return this.simulationForm.controls; }


  submit(){
    this.submitted = true;
    console.log(this.simulationForm.value);
    this.commonService.createSimuation(this.simulationForm.value)
    .subscribe(
      response => {     
        console.log(response);   
        this.successful = true;     
        // setTimeout(() => {
        //   console.log('i')
        //   this.router.navigateByUrl('/login');
        // }, 2000);  //5s
      },
      error => {
        this.submitted = true;
        console.log(error);
      });
  }

  selectCategory(category_name:any){
    this.simulationForm.controls.simulation_category.setValue(category_name);

    // this.simulationForm.get('simulation_category').setValue(data.id);
  }

  changeCountry(){

  }

}
