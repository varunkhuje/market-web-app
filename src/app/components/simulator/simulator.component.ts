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
        text: '',
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
    series: [{type: "gauge",data: [100]}]
    };

    highchart2 = Highcharts;
    chartOptions2:any = {     
        chart: {
          type: 'bar',
          backgroundColor: '#121212',

      },
      title: {
          text: 'ROI',
          style: {
            color: 'white',
          }
      },
      xAxis: {
          categories: ['Current', 'Recommended', 'New'],
          labels: {
            style: {
              color: 'white'
            }
          }
      },
      yAxis: {
        visible: false,
      
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'Digital',
          data: [2, 2, 2],
          labels: {
            style: {
              color: 'white'
            }
          }
      }, {
          name: 'TV',
          data: [4.5, 1, 2.5]
      }]
    };

    highchart3 = Highcharts;
    chartOptions3:any = {     
        chart: {
          type: 'bar',
          backgroundColor: '#121212',
          style: {
            color: 'white',
          }

      },
      title: {
          text: 'Spend',
          style: {
            color: 'white',
          }
      },
      xAxis: {
          categories: ['Current', 'Recommended','New'],
          labels: {
            style: {
              color: 'white'
            }
          }
      },
      yAxis: {
        visible: false,
      
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'Digital',
          data: [2, 2, 2]
      }, {
          name: 'TV',
          data: [4.5, 1, 2.5]
      }]
    };


    
    highchart4 = Highcharts;
    chartOptions4:any = {     
      chart: {
        type: 'column',
        backgroundColor: '#121212',
          style: {
            color: 'white',
          }
    },
    title: {
        text: 'Volume Due to',
        style: {
          color: 'white',
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Distribution',
            'TV',
            'Digital',
            'Trade',
            'Price',
           
        ],
        labels: {
          style: {
            color: 'white'
          }
        },
        // crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

    }]
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
