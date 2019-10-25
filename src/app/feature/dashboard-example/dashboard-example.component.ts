import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HighchartsService } from './coreDashboard/highcharts.service';

@Component({
  selector: 'app-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.css']
})
export class DashboardExampleComponent implements OnInit {

  @ViewChild('charts') public chartEl: ElementRef;

  constructor(private highcharts: HighchartsService) { }
  ngOnInit(){
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
   myOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
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
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };
}