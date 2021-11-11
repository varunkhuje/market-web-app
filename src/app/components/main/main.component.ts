import { Component, OnInit } from '@angular/core';
import {AlertBoxComponent} from '../alert-box/alert-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';



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

  selectedDetails: any = {};
  total_volume: any;
  growth_ambition: any;
  growth:any;
  woa:any;
  weekly_grp:any;
  tv_grp_total:any;
  tv_genres:any;
  digital_platforms:any;
  national_da:any;
  // input_values: any= {};
  tv_digital_values: any = {};
  existing_values: any = {};
  effectiveness_values: any = {};
  asp_values: any = {};
  tv_total_data: any;
  digital_total_data:any;

  insert_db = [];

  input_values: any= {
    'growth_ambition': 5,
    'woa':20,
    'weekly_grp': 200,
    'total_spend': 2000000,
    'max_trade':25
  };



  isShowDiv = false;

  
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  constructor(private commonService:CommonService, 
              private dataService:DataService, 
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedDetails = this.commonService.selectedDetails;
    this.getCSVData();
  }

  getCSVData(): void {
    this.dataService.getCSVData(this.selectedDetails)
    .subscribe(
       data => {
          this.input_values.current_volume = data.total_volume;
          this.input_values.current_da = Number(data.current_da);

          this.total_volume =  (data.total_volume/1000000).toFixed(2);
          this.national_da =  data.current_da;
          this.tv_total_data =  data.tv_genres.filter((x: any) => x.genre_platform == 'Total').map((d:any)=>{return d} )
          // data.tv_genres.map((d:any)=>{
          //   d.value = d.cost_per_metric;
          // })
          console.log(data.tv_genres)
          this.tv_genres =  data.tv_genres.filter((x: any) => x.genre_platform != 'Total')
           
          this.digital_total_data =  data.digital_platforms.filter((x: any) => x.genre_platform == 'Total').map((d:any)=>{return d} )



          // data.digital_platforms.map((d:any)=>{
          //   d.value = d.cost_per_metric;
          // })
          this.digital_platforms =  data.digital_platforms.filter((x: any) => x.genre_platform != 'Total')

         
       },
       error => {
          console.log(error);
       });
  }

  openAlertBox(){
    
    // const dialogRef = this.dialog.open(AlertBoxComponent, {
    //   width: '800px',
    //   data: 'filter'
    // });
    this.input_values.simulation_id = this.selectedDetails.simulation_id;

    this.input_values.total_grp = this.input_values.woa * this.input_values.weekly_grp;

    this.tv_genres.forEach((currentValue:any, index:any) => {
      this.tv_digital_values[currentValue['genre_platform'] + '_tv'] = currentValue['cost_per_metric'] != null ? Number(currentValue['cost_per_metric']): '';
    });

    this.tv_genres.forEach((currentValue:any, index:any) => {
      this.existing_values[currentValue['genre_platform'] + '_tv'] = Number(currentValue['current_grp']);
    });

    this.tv_genres.forEach((currentValue:any, index:any) => {
      this.effectiveness_values[currentValue['genre_platform'] + '_tv'] = Number(currentValue['effectiveness']);
    });

    this.tv_genres.forEach((currentValue:any, index:any) => {
      console.log(currentValue)
      this.asp_values[currentValue['genre_platform'] + '_tv'] = Number(currentValue['current_asp']);
    });

    this.digital_platforms.forEach((currentValue:any, index:any) => {
      this.tv_digital_values[currentValue['genre_platform'] + '_digital'] =(currentValue['cost_per_metric'] != null || currentValue['cost_per_metric'] != '') ? Number(currentValue['cost_per_metric']): '';
    });

    this.digital_platforms.forEach((currentValue:any, index:any) => {
      this.existing_values[currentValue['genre_platform'] + '_digital'] = Number(currentValue['current_grp']);
    });

    this.digital_platforms.forEach((currentValue:any, index:any) => {
      this.effectiveness_values[currentValue['genre_platform'] + '_digital'] = Number(currentValue['effectiveness']);
    });

    this.digital_platforms.forEach((currentValue:any, index:any) => {
      this.asp_values[currentValue['genre_platform'] + '_digital'] = Number(currentValue['current_asp']);
    });
    
    this.input_values.user_input = this.tv_digital_values;
    this.input_values.existing= this.existing_values;

    this.input_values.effectiveness = this.effectiveness_values;

    this.input_values.asp = this.asp_values;

    this.input_values.try_scenario = false;
    this.input_values.tv_current_total_spends = this.tv_total_data[0].current_spends;
    this.input_values.digital_current_total_spends = this.digital_total_data[0].current_spends;

    this.input_values.tv_current_volume =  this.tv_total_data[0].current_volume;
    this.input_values.digital_current_volume =  this.digital_total_data[0].current_volume;

    this.input_values.tv_current_total_roi =  this.tv_total_data[0].roi;
    this.input_values.digital_current_total_roi =  this.digital_total_data[0].roi;



    this.dataService.setSimulationParameters(this.input_values);

    this.dataService.runSimulator(this.input_values)
    .subscribe(
      data => {
        this.dataService.setRecommendedValues(data); 
        setTimeout(() => {
          this.router.navigateByUrl('/simulator');     
        }, 100); 
        },
      error => {
        console.log(error);
      });

   
  }
   

  

  

}
