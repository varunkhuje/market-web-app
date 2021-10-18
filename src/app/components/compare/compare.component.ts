import { Component, OnInit } from '@angular/core';
import {OpenDialogComponent} from '../open-dialog/open-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

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

  showgraph: any = 'volume';

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

  
  graphChange(event:any){
    this.showgraph = event.value;
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
          backgroundColor: 'transparent',

      },
      credits: {enabled: false},
      title: {
          text: 'ROI',
          style: {
            color: 'white',
            fontSize:'12px'
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
          backgroundColor: 'transparent',
          style: {
            color: 'white',
            fontSize:'12px'
          }

      },
      credits: {enabled: false},
      title: {
          text: 'Spend',
          style: {
            color: 'white',
            fontSize:'12px'
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
        backgroundColor: 'transparent',
          style: {
            color: 'white',
          }
    },
    credits: {enabled: false},
    title: null,
    
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Distri-<br>bution',
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
    legend: {
      enabled: false
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
        name: '',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

    }]
    };

    highchart5 = Highcharts;
    chartOptions5: any ={
      chart: {
        type: 'column'
    },
    credits: {enabled: false},
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
        categories: [
            'Current',
            'New',
        ],
        crosshair: true
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
        name: '',
        data: [0.59, 0.59]
    }]
    };


  ngOnInit(): void {
  }

}
