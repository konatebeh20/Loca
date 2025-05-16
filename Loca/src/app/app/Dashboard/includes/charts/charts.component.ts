import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import  { BaseChartDirective  }  from  'ng2-charts' ;



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],

})
export class ChartsComponent  implements OnInit {

  @Input() chartData!: ChartData<'bar'>;
  @Input() chartType: ChartType = 'bar';

  constructor() { }

  ngOnInit() {}

}
