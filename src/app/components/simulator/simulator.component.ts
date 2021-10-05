import { Component, OnInit } from '@angular/core';
import {OpenDialogComponent} from '../open-dialog/open-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
// import { Chart } from 'angular-highcharts';



@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  showDiv = {
    Mfilter : false,
    current : false,
    tvFilter : false,
    media : false
  }


  model:any;
  constructor(public dialog: MatDialog,){
      this.model = {name: null, ExeCution: false, Media: false,};
    }

    title = 'appComponent';
    
  isShowDiv = true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }



     
//   data = [{
//     name: 'ItSolutionStuff.com',
//     data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
//  },{
//     name: 'Nicesnippets.com',
//     data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
//  }];

Highcharts: typeof Highcharts = Highcharts;
chartOptions: Highcharts.Options = {  
    chart: {
      type: 'solidgauge',
      height: '100%',
      width: 350,
      backgroundColor: 'transparent'
  },
  credits: {enabled: false},
  title: {
      text: 'No format',
      y: 250,
      style: {'font-family': 'Muli, Helvetica Neue, Arial, sans-serif', 'font-size': '36px'}
  },
  pane: {
    // center: ["50%", "85%"],
    // size: "140%",
    startAngle: -90,
    endAngle: 90,
    background: [{
      backgroundColor: 'white',
      innerRadius: '60%',
      outerRadius: '90%',
      shape: 'arc',
      borderColor: 'transparent'
  }], 
    
      // startAngle: -90,
      // endAngle: 90,
      // background: {
      //     color: 'white',
      //     innerRadius: '60%',
      //     outerRadius: '90%',
      //     shape: 'arc',
      //     borderColor: 'transparent',
      //}
  },
  tooltip: {
      enabled: false
  },
  yAxis: {
      stops: [
          [0, '#b0bec5'],
          [0.5, '#b0bec5'],
          [0.5, '#546e7a'],
          [1, '#546e7a'],
      ],
      length: 5,
      lineWidth: 0,
      minorTicks: false,
      tickAmount: 0,
      tickColor: 'transparent',
      labels: {
          enabled: false,
      },
      min: -100,
      max: 100,
      plotBands: [
          { from: -100, to: 0, color: '#b0bec5', outerRadius: '132'},
          { from: 0, to: 100, color: '#546e7a', outerRadius: '132'},
      ]
  },
  plotOptions: {
      solidgauge: {
          threshold: 0,
          dataLabels: {
              style: {'fontSize': '36px', 'font-family': 'Muli, Helvetica Neue, Arial, sans-serif', 'fontWeight': 'light'},
              y: -50,
              borderWidth: 0,
          }
      }
  },
  series: [
      {
        
          type: "gauge",
          data: [100]
        
      }
  ]
  };

  
  
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
